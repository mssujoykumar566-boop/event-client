import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">
          Discover Amazing Events Around You
        </h1>

        <p className="mt-6 text-lg text-blue-100 max-w-xl">
          Join conferences, workshops, meetups and create unforgettable
          experiences with EventSphere.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/events"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Explore Events
          </Link>

          <Link
            href="/create-event"
            className="border border-white px-6 py-3 rounded-lg font-semibold"
          >
            Create Event
          </Link>
        </div>
      </div>
    </section>
  );
}
