"use client";

import { useState } from "react";
import { ChevronDown } from "@gravity-ui/icons";

const faqs = [
  {
    question: "How can I create an event?",
    answer:
      "After logging in, go to the Add Event page, fill in the required information and submit your event.",
  },

  {
    question: "Can users search and filter events?",
    answer:
      "Yes. Users can search events and filter them by category, price, location and date.",
  },

  {
    question: "Is my account information secure?",
    answer:
      "Yes. We use secure authentication and protected sessions to keep user information safe.",
  },

  {
    question: "Can I manage my created events?",
    answer:
      "Yes. The Manage Events dashboard allows you to view, update and delete your events.",
  },

  {
    question: "Can I join events without creating an account?",
    answer:
      "You can browse events publicly, but registration is required for event participation.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
            text-3xl
            font-bold
            text-slate-900
            md:text-4xl
            "
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate-600">
            Find answers to common questions about our platform.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                "
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-5
                  text-left
                  "
              >
                <span
                  className="
                    font-semibold
                    text-slate-900
                    "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  width={20}
                  height={20}
                  className={`
                    transition
                    ${active === index ? "rotate-180" : ""}
                    `}
                />
              </button>

              {active === index && (
                <div
                  className="
                      border-t
                      border-slate-200
                      px-5
                      py-4
                      text-sm
                      leading-6
                      text-slate-600
                      "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
