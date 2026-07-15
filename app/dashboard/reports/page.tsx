"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Report = {
  totalUsers: number;
  totalEvents: number;
  totalRegistrations: number;
  totalOrganizers: number;
};

export default function ReportsPage() {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const getReports = async () => {
      const res = await fetch(`${API_URL}/admin/reports`, {
        credentials: "include",
      });

      const data = await res.json();

      setReport(data.data);
    };

    getReports();
  }, []);

  if (!report) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1
        className="
text-3xl
font-bold
"
      >
        Reports
      </h1>

      <div
        className="
grid
md:grid-cols-4
gap-5
mt-8
"
      >
        <Card title="Total Users" value={report.totalUsers} />

        <Card title="Total Events" value={report.totalEvents} />

        <Card title="Organizers" value={report.totalOrganizers} />

        <Card title="Registrations" value={report.totalRegistrations} />
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div
      className="
bg-white
border
rounded-xl
p-6
shadow-sm
"
    >
      <p
        className="
text-gray-500
"
      >
        {title}
      </p>

      <h2
        className="
text-3xl
font-bold
mt-2
"
      >
        {value}
      </h2>
    </div>
  );
}
