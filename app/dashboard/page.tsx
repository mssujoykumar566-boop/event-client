"use client";

import { authClient } from "@/src/lib/auth-client";
import { useEffect, useState } from "react";

import { User } from "@/src/types/user";


type Stats = {
  totalEvents: number;
  upcomingEvents: number;
  revenue: number;
};
export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);


  const [stats, setStats] = useState<Stats>({
    totalEvents: 0,
    upcomingEvents: 0,
    revenue: 0,
  });

 useEffect(() => {
  const getUser = async () => {
    const { data } = await authClient.getSession();


    if (data?.user) {

      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,

        role: (data.user as {
          role?: "user" | "organizer" | "admin";
        }).role ?? "user",

        createdAt: data.user.createdAt,
      });


    } else {

      setUser(null);

    }


    setLoading(false);
  };


  getUser();

}, []);

  useEffect(() => {
     const getStats = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events/dashboard-stats`,
        {
          credentials: "include",
        },
      );

      const data = await res.json();

      setStats(
  data.stats || {
    totalEvents: 0,
    upcomingEvents: 0,
    revenue: 0,
  }
);
    };

    getStats();
  })

  if (loading) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Dashboard
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Manage your events and account
        </p>
      </div>

      {/* Welcome Card */}

      <div
        className="
        bg-white
        border
        rounded-2xl
        p-6
        shadow-sm
        "
      >
        <h2
          className="
          text-2xl
          font-semibold
          "
        >
          Welcome, {user?.name} 👋
        </h2>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Here is your EventSphere dashboard overview.
        </p>

        <div
          className="
          mt-5
          space-y-2
          "
        >
          <p>
            Name:
            <span className="font-medium ml-2">{user?.name}</span>
          </p>

          <p>
            Email:
            <span className="font-medium ml-2">{user?.email}</span>
          </p>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >
        <div
          className="
          bg-white
          border
          rounded-xl
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">Total Events</p>

          <h3
            className="
            text-3xl
            font-bold
            mt-3
            "
          >
            {stats.totalEvents}
          </h3>
        </div>

        <div
          className="
          bg-white
          border
          rounded-xl
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">Upcoming Events</p>

          <h3
            className="
            text-3xl
            font-bold
            mt-3
            "
          >
            {stats.upcomingEvents}
          </h3>
        </div>

        <div
          className="
          bg-white
          border
          rounded-xl
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">Total Revenue</p>

          <h3
            className="
            text-3xl
            font-bold
            mt-3
            "
          >
            ${stats.revenue}
          </h3>
        </div>
      </div>
    </div>
  );
}
