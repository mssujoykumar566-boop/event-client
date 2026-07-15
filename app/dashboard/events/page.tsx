"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = "/api";

type Event = {
  _id: string;
  title: string;
  image: string;
  category: string;
  location: string;
  price: number;
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/admin/events`, {
          credentials: "include",
        });

        const data = await res.json();

        setEvents(data.events || []);
      } catch (error) {
        toast.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this event?");

    if (!confirmDelete) return;

    const res = await fetch(`${API_URL}/admin/events/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Event deleted successfully");

      setEvents(events.filter((event) => event._id !== id));
    } else {
      toast.error(data.message);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading events...</p>;
  }

  return (
    <div>
      <h1
        className="
text-3xl
font-bold
"
      >
        Manage Events
      </h1>

      {events.length === 0 ? (
        <p
          className="
mt-8
text-gray-500
"
        >
          No events found
        </p>
      ) : (
        <div
          className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-8
"
        >
          {events.map((event) => (
            <div
              key={event._id}
              className="
bg-white
border
rounded-xl
p-5
shadow-sm
"
            >
              <img
                src={event.image}
                alt={event.title}
                className="
w-full
h-44
object-cover
rounded-lg
"
              />

              <h2
                className="
text-xl
font-bold
mt-4
"
              >
                {event.title}
              </h2>

              <p className="mt-2">📂 {event.category}</p>

              <p>📍 {event.location}</p>

              <p>💰 ${event.price}</p>

              <div
                className="
mt-5
flex
gap-3
"
              >
                <button
                  onClick={() => handleDelete(event._id)}
                  className="
bg-red-500
text-white
px-4
py-2
rounded-lg
"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    console.log("EVENT ID:", event._id);

                    router.push(`/events/${event._id}`);
                  }}
                  className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
