"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CreateEventPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const eventData = {
      title: formData.get("title"),

      shortDescription: formData.get("shortDescription"),

      description: formData.get("description"),

      category: formData.get("category"),

      location: formData.get("location"),

      date: formData.get("date"),

      price: Number(formData.get("price")),

      image: formData.get("image"),

      organizer: "EventSphere",
    };

    const res = await fetch(`${API_URL}/events`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(eventData),

      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Event created successfully");

      router.push("/dashboard/events");
    } else {
      toast.error(data.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Create Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
        mt-8
        bg-white
        border
        rounded-xl
        p-6
        max-w-2xl
        space-y-5
        "
      >
        <input
          name="title"
          required
          placeholder="Event title"
          className="input"
        />

        <input
          name="shortDescription"
          required
          placeholder="Short description"
          className="input"
        />

        <textarea
          name="description"
          required
          placeholder="Full description"
          className="input h-32"
        />

        <input
          name="category"
          required
          placeholder="Category"
          className="input"
        />

        <input
          name="location"
          required
          placeholder="Location"
          className="input"
        />

        <input name="date" type="date" required className="input" />

        <input
          name="price"
          type="number"
          required
          placeholder="Price"
          className="input"
        />

        <input
          name="image"
          required
          placeholder="Image URL"
          className="input"
        />

        <button
          disabled={loading}
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          font-semibold
          "
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}
