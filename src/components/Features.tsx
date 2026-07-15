"use client";

import {
  Calendar,
  Person,
  ShieldCheck,
  ChartColumn,
} from "@gravity-ui/icons";

const features = [
  {
    icon: Calendar,
    title: "Easy Event Management",
    description:
      "Create, organize and manage events from one simple dashboard.",
  },

  {
    icon: Person,
    title: "Smart Event Search",
    description:
      "Find events quickly with powerful search and filtering options.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your account and event data stay protected with secure authentication.",
  },

  {
    icon: ChartColumn,
    title: "Analytics Dashboard",
    description: "Track registrations, events and platform performance easily.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Powerful Features For
            <span className="text-blue-600"> Smart Events</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to create, manage and discover professional
            events in one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                hover:shadow-md
                transition
                "
              >
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  "
                >
                  <Icon width={24} height={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
