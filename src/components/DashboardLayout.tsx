"use client";

import { useEffect, useState } from "react";
import DashboardSidebar from "./DashBoardSidebar";
import { authClient } from "@/src/lib/auth-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const [role, setRole] = useState<
  "user" | "organizer" | "admin"
>("user");  const [open, setOpen] = useState(false);

 useEffect(() => {

  const getUser = async () => {

    const { data } = await authClient.getSession();


    const userRole =
      (data?.user as {
        role?: "user" | "organizer" | "admin";
      })?.role;


    if(userRole){
      setRole(userRole);
    }

  };


  getUser();

}, []);

  return (
    <div
      className="
      min-h-screen
      bg-gray-50
      "
    >
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
        md:hidden
        m-4
        bg-blue-600
        text-white
        px-4
        py-2
        rounded-lg
        "
      >
        ☰ Menu
      </button>

      <div className="flex">
        {/* Desktop Sidebar */}

        <aside
          className="
          hidden
          md:block
          w-64
          min-h-screen
          border-r
          bg-white
          "
        >
          <DashboardSidebar role={role} />
        </aside>

        {/* Mobile Sidebar */}

        {open && (
          <>
            {/* Overlay */}

            <div
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                bg-black/40
                z-40
                md:hidden
                "
            />

            {/* Drawer */}

            <aside
              className="
                fixed
                top-0
                left-0
                w-72
                h-screen
                bg-white
                z-50
                shadow-xl
                transition-transform
                md:hidden
                "
            >
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-5
                  top-5
                  text-xl
                  "
              >
                ✕
              </button>

              <DashboardSidebar
                role={role}
                closeSidebar={() => setOpen(false)}
              />
            </aside>
          </>
        )}

        {/* Content */}

        <main
          className="
          flex-1
          p-4
          md:p-6
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
