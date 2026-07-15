"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Technology Events",
    description: "Explore conferences, workshops and tech meetups.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },

  {
    title: "Business Events",
    description: "Connect with entrepreneurs and business professionals.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  },

  {
    title: "Music & Entertainment",
    description: "Discover concerts, shows and entertainment programs.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },

  {
    title: "Sports Events",
    description: "Join exciting sports activities and competitions.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
  },
];

export default function EventCategories() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Explore Event Categories
            </h2>

            <p className="mt-3 text-slate-600 max-w-xl">
              Find events based on your interests and connect with people who
              share the same passion.
            </p>
          </div>

          <Link
            href="/events"
            className="
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-white
            text-sm
            font-medium
            hover:bg-blue-700
            transition
            "
          >
            View All Events
          </Link>
        </div>

        {/* Category Cards */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                hover:shadow-md
                transition
                "
            >
              <div className="relative h-48 w-full">
                <img
                  src={category.image}
                  alt={category.title}
                
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-6">
                  {category.description}
                </p>

                <Link
                  href="/events"
                  className="
                    mt-4
                    inline-block
                    text-sm
                    font-medium
                    text-blue-600
                    hover:text-blue-700
                    "
                >
                  Explore Events →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
