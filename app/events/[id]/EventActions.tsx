"use client";

import { authClient } from "@/src/lib/auth-client";
import JoinEventButton from "@/src/components/JoinEventButton";
import { useEffect, useState } from "react";

type UserRole = "user" | "organizer" | "admin";

interface Props {
  eventId: string;
}

export default function EventActions({ eventId }: Props) {
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authClient.getSession();

      const userRole = (
        data?.user as {
          role?: UserRole;
        }
      )?.role;

      if (userRole) {
        setRole(userRole);
      }
    };

    getUser();
  }, []);

  return <>{role === "user" && <JoinEventButton eventId={eventId} />}</>;
}
