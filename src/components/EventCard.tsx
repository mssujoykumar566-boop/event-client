import Link from "next/link";
import { Event } from "../types/event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="rounded-xl border p-5 shadow-sm hover:shadow-md transition">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold">{event.title}</h2>

        <p className="text-gray-600 mt-2">{event.shortDescription}</p>
        
        <div className="mt-4 space-y-1">
          <p>📍 {event.location}</p>

          <p>📅 {new Date(event.date).toLocaleDateString()}</p>

          <p>💰 ${event.price}</p>
        </div>

        <Link
          href={`/events/${event._id}`}
          className="mt-5 block w-full text-center rounded-lg bg-black text-white py-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
