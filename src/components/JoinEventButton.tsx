"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  eventId: string;
};

export default function JoinEventButton({ eventId }: Props) {
  const router = useRouter();

  const handleJoin = async () => {
    try {
      const res = await fetch(
        `/api/events/${eventId}/join`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);

        return;
      }

      toast.success("Event joined successfully");

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleJoin}
      className="
      mt-8
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      rounded-lg
      "
    >
      Join Event
    </button>
  );
}
