"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Event = {
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  location: string;
  date: string;
  price: number;
  image: string;
};

export default function EditEventPage() {
  const router = useRouter();

  const params = useParams();

  const id = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await fetch(`${API_URL}/events/${id}`, {
          credentials: "include",
        });

        const data = await res.json();

        setEvent(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getEvent();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updateData = {
      title: formData.get("title"),

      shortDescription: formData.get("shortDescription"),

      description: formData.get("description"),

      category: formData.get("category"),

      location: formData.get("location"),

      date: formData.get("date"),

      price: Number(formData.get("price")),

      image: formData.get("image"),
    };

    const res = await fetch(`${API_URL}/events/${id}`, {
      method: "PATCH",

      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updateData),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Event updated successfully");

      router.push("/dashboard");
    } else {
      toast.error(data.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="title"
          defaultValue={event.title}
          className="input"
          placeholder="Title"
        />

        <input
          name="shortDescription"
          defaultValue={event.shortDescription}
          className="input"
          placeholder="Short Description"
        />

        <textarea
          name="description"
          defaultValue={event.description}
          className="input"
        />

        <input
          name="category"
          defaultValue={event.category}
          className="input"
        />

        <input
          name="location"
          defaultValue={event.location}
          className="input"
        />

        <input
          name="date"
          type="date"
          defaultValue={event.date?.split("T")[0]}
          className="input"
        />

        <input
          name="price"
          type="number"
          defaultValue={event.price}
          className="input"
        />

        <input name="image" defaultValue={event.image} className="input" />

        <button
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "
        >
          Update Event
        </button>
      </form>
    </div>
  );
}
