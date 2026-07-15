"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  closeSidebar?: () => void;
  role?: string;
};

export default function DashboardSidebar({ closeSidebar, role }: Props) {
  const pathname = usePathname();

 const menuItems =
    role === "admin"
      ? [
          {
            name: "Overview",
            href: "/dashboard",
          },
           {
          name:"Profile",
          href:"/dashboard/profile",
        },
          {
            name: "Manage Users",
            href: "/dashboard/users",
          },
          {
            name: "Manage Events",
            href: "/dashboard/events",
          },
          {
            name: "Reports",
            href: "/dashboard/reports",
          },
        ]
      : role === "organizer"
      ? [
          {
            name: "Overview",
            href: "/dashboard",
          },
          {
            name: "Profile",
            href: "/dashboard/profile",
          },
          {
            name: "My Events",
            href: "/dashboard/my-events",
          },
          {
            name: "Create Event",
            href: "/dashboard/create-event",
          },
        ]
      : [
          {
            name: "Overview",
            href: "/dashboard",
          },
          {
            name: "Profile",
            href: "/dashboard/profile",
          },
          {
            name: "Joined Events",
            href: "/dashboard/joined-events",
          },
        ];

  return (
    <aside
      className="
h-full
bg-white
p-5
"
    >
      <h2
        className="
text-2xl
font-bold
text-blue-600
mb-8
"
      >
        EventSphere
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeSidebar}
            className={`
block
px-4
py-3
rounded-xl

${pathname === item.href ? "bg-blue-600 text-white" : "hover:bg-gray-100"}

`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
