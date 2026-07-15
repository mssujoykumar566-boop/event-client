"use client";

import { useState } from "react";
import { FaceSmile,  } from "@gravity-ui/icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
          rounded-3xl
          bg-slate-900
          px-6
          py-12
          md:px-12
          "
        >
          <div
            className="
            mx-auto
            max-w-3xl
            text-center
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-white
              md:text-4xl
              "
            >
              Stay Updated With Latest Events
            </h2>

            <p
              className="
              mt-4
              text-slate-300
              "
            >
              Subscribe to receive upcoming events, announcements and platform
              updates.
            </p>

            <form
              onSubmit={handleSubmit}
              className="
              mx-auto
              mt-8
              flex
              max-w-xl
              flex-col
              gap-3
              sm:flex-row
              "
            >
              <div
                className="
                flex
                flex-1
                items-center
                gap-3
                rounded-xl
                bg-white
                px-4
                "
              >
                <FaceSmile width={20} height={20} className="text-slate-500" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="
                  w-full
                  py-3
                  text-slate-900
                  outline-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-700
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
