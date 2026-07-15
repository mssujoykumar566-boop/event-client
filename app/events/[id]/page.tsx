import { notFound } from "next/navigation";
import EventActions from "./EventActions";
import EventCard from "@/src/components/EventCard";
import { Event } from "@/src/types/event";

const API_URL =
  process.env.BACKEND_API_URL ?? "https://event-server-nvtu.onrender.com/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

interface EventResponse {
  success: boolean;

  data: Event;
}

async function getEvent(id: string): Promise<EventResponse | null> {
  const res = await fetch(`${API_URL}/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getRelatedEvents(
  category: string,
  id: string,
): Promise<Event[]> {
  const res = await fetch(`${API_URL}/events?category=${category}&limit=3`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return (data.events || data.data || [])
    .filter((event: Event) => event._id !== id)
    .slice(0, 3);
}

export default async function EventDetailsPage({ params }: Props) {
  const { id } = await params;

  const result = await getEvent(id);

  if (!result?.success) {
    notFound();
  }

  const event = result.data;

  const relatedEvents = await getRelatedEvents(event.category, event._id);

  return (
    <main
      className="
max-w-7xl
mx-auto
px-6
py-12
"
    >
      <div
        className="
bg-white
border
rounded-2xl
shadow-sm
p-6
"
      >
        <img
          src={event.image}
          alt={event.title}
          className="
w-full
h-[420px]
object-cover
rounded-xl
"
        />

        <h1
          className="
text-4xl
font-bold
mt-8
"
        >
          {event.title}
        </h1>

        <section className="mt-8">
          <h2
            className="
text-2xl
font-bold
mb-3
"
          >
            Overview
          </h2>

          <p
            className="
text-gray-600
leading-7
"
          >
            {event.description}
          </p>
        </section>

        <section
          className="
mt-8
grid
md:grid-cols-2
gap-4
"
        >
          <div
            className="
border
rounded-xl
p-5
"
          >
            <h3 className="font-bold mb-4">Event Information</h3>

            <p>
              📂 Category:
              <span className="ml-2 font-medium">{event.category}</span>
            </p>

            <p>
              📍 Location:
              <span className="ml-2 font-medium">{event.location}</span>
            </p>

            <p>
              📅 Date:
              <span className="ml-2 font-medium">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </p>

            <p>
              💰 Price:
              <span className="ml-2 font-medium">${event.price}</span>
            </p>
          </div>

          <div
            className="
border
rounded-xl
p-5
"
          >
            <h3 className="font-bold mb-4">Organizer</h3>

            <p>👤 {event.organizer}</p>
          </div>
        </section>

        <div className="mt-8">
          <EventActions eventId={event._id} />
        </div>
      </div>

      {relatedEvents.length > 0 && (
        <section className="mt-14">
          <h2
            className="
text-3xl
font-bold
mb-6
"
          >
            Related Events
          </h2>

          <div
            className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
"
          >
            {relatedEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
