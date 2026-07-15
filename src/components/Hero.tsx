"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Events",
  },
  {
    number: "10K+",
    label: "Participants",
  },
  {
    number: "50+",
    label: "Organizers",
  },
];

export default function Hero() {
  return (
    <section
      className="
      min-h-[65vh]
      bg-gradient-to-br
      from-blue-600
      via-indigo-600
      to-purple-700
      text-white
      overflow-hidden
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Left Content */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
            inline-block
            bg-white/20
            px-4
            py-2
            rounded-full
            text-sm
            backdrop-blur
            "
          >
            🚀 Discover. Connect. Experience.
          </span>

          <h1
            className="
            mt-6
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            "
          >
            Discover Amazing
            <span
              className="
              block
              text-yellow-300
              "
            >
              Events Around You
            </span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-blue-100
            max-w-xl
            "
          >
            Join conferences, workshops, meetups and exciting experiences.
            EventSphere helps you discover and participate in meaningful events.
          </p>

          <div
            className="
            mt-8
            flex
            gap-4
            flex-wrap
            "
          >
            <Link
              href="/events"
              className="
              bg-white
              text-blue-600
              px-7
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Explore Events
            </Link>

            <Link
              href="/create-event"
              className="
              border
              border-white/70
              px-7
              py-3
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-blue-600
              transition
              "
            >
              Create Event
            </Link>
          </div>

          {/* Stats */}

          <div
            className="
            mt-10
            grid
            grid-cols-3
            gap-4
            max-w-md
            "
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.2,
                }}
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                  text-sm
                  text-blue-100
                  "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Animated Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          justify-center
          "
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            relative
            "
          >
            <div
              className="
              w-80
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              rounded-3xl
              p-6
              shadow-2xl
              "
            >
              <div
                className="
                bg-white
                rounded-2xl
                p-6
                text-gray-800
                "
              >
                <p
                  className="
                  text-sm
                  text-blue-600
                  font-semibold
                  "
                >
                  Upcoming Event
                </p>

                <h2
                  className="
                  text-2xl
                  font-bold
                  mt-3
                  "
                >
                  React Summit 2026
                </h2>

                <div
                  className="
                  mt-4
                  space-y-2
                  text-gray-600
                  "
                >
                  <p>📍 Dhaka, Bangladesh</p>

                  <p>📅 March 20, 2026</p>

                  <p>👥 500+ Attendees</p>
                </div>

                <button
                  className="
                  mt-5
                  w-full
                  bg-blue-600
                  text-white
                  py-3
                  rounded-xl
                  "
                >
                  Join Now
                </button>
              </div>
            </div>

            {/* Floating circles */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
              absolute
              -top-6
              -right-6
              w-20
              h-20
              bg-yellow-300/40
              rounded-full
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
