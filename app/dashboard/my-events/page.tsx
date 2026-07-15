"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

export default function MyEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/events/my-events`, {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();

        setEvents(data.events || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this event?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Event deleted successfully");

        setEvents((prev) => prev.filter((event) => event._id !== id));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          "
        >
          My Events
        </h1>

        <Link
          href="/dashboard/create-event"
          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          "
        >
          Create Event
        </Link>
      </div>

      {events.length === 0 ? (
        <p className="mt-8 text-gray-500">No events found</p>
      ) : (
        <div
          className="
            grid
            md:grid-cols-2
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
                    h-48
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

              <p className="text-gray-500 mt-2">{event.category}</p>

              <p>📍 {event.location}</p>

              <p>💰 ${event.price}</p>

              <Link
                href={`/events/${event._id}`}
                className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                inline-block
                mt-4
                "
              >
                View Details
              </Link>

              <div className="flex gap-3 mt-5">
                <Link
                  href={`/dashboard/edit-event/${event._id}`}
                  className="
    bg-yellow-500
    text-white
    px-4
    py-2
    rounded-lg
    "
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(event._id)}
                  className="
    bg-red-500
    hover:bg-red-600
    text-white
    px-4
    py-2
    rounded-lg
    "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
