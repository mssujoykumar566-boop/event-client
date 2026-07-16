import EventCard from "@/src/components/EventCard";
import EventCategories from "@/src/components/EventCategories";
import FAQ from "@/src/components/FAQ";
import Features from "@/src/components/Features";
import Hero from "@/src/components/Hero";
import Newsletter from "@/src/components/Newsletter";
import Statistics from "@/src/components/Statistics";
import Testimonials from "@/src/components/Testimonials";
import type { Event } from "@/src/types/event";
const API_URL =
  process.env.BACKEND_API_URL ?? "https://event-server-nvtu.onrender.com/api";



interface EventsResponse {
  success: boolean;
  events: Event[];
  data?: Event[];
  error?: string;
}

async function getEvents(): Promise<EventsResponse> {
  try {
    const res = await fetch(`${API_URL}/events`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return {
        success: false,
        events: [],
        data: [],
        error:
          res.status === 429
            ? "Events are temporarily rate-limited. Please try again shortly."
            : "Events are temporarily unavailable.",
      };
    }

    const contentType = res.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return {
        success: false,
        events: [],
        data: [],
        error: "Events are temporarily unavailable.",
      };
    }

    const data: unknown = await res.json();

    if (
      !data ||
      typeof data !== "object" ||
      !Array.isArray((data as EventsResponse).events)
    ) {
      return {
        success: false,
        events: [],
        data: [],
        error: "The events service returned an unexpected response.",
      };
    }

    return data as EventsResponse;
  } catch {
    return {
      success: false,
      events: [],
      data: [],
      error: "Events are temporarily unavailable.",
    };
  }
}

export default async function Home() {
  const data = await getEvents();

  return (
    <main className="p-10">
      <Hero/>


      <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.events?.map((event: Event) => (
          <EventCard
          key={event._id}
          event={event}
          />
        ))}

      </div>
      {data.error && (
        <p className="mt-6 text-center text-sm text-gray-500" role="status">
          {data.error}
        </p>
      )}
        <Features/>

        <EventCategories/>

        <Statistics/>

        <Testimonials/>

        <FAQ/>

        <Newsletter/>
      </section>

    </main>
  );
}
