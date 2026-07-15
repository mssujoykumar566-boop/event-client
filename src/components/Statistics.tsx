"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Stat = {
  title: string;
  value: string;
};

type ChartData = {
  month: string;
  events: number;
};

const stats: Stat[] = [
  {
    title: "Total Events",
    value: "2,500+",
  },

  {
    title: "Active Users",
    value: "15,000+",
  },

  {
    title: "Registrations",
    value: "45,000+",
  },

  {
    title: "Successful Events",
    value: "98%",
  },
];

const chartData: ChartData[] = [
  {
    month: "Jan",
    events: 120,
  },

  {
    month: "Feb",
    events: 180,
  },

  {
    month: "Mar",
    events: 250,
  },

  {
    month: "Apr",
    events: 320,
  },

  {
    month: "May",
    events: 420,
  },

  {
    month: "Jun",
    events: 520,
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Platform Statistics
          </h2>

          <p className="mt-3 text-slate-600">
            Track our growing event community and activities.
          </p>
        </div>

        <div
          className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="
rounded-2xl
border
bg-white
p-6
text-center
shadow-sm
"
            >
              <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>

              <p className="mt-2 text-slate-600">{item.title}</p>
            </div>
          ))}
        </div>

        <div
          className="
mt-12
rounded-2xl
border
bg-white
p-6
shadow-sm
"
        >
          <h3 className="mb-6 text-xl font-semibold">Monthly Event Growth</h3>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="events"
                  stroke="#2563eb"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
