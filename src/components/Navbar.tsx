"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { authClient } from "@/src/lib/auth-client";

export default function Navbar() {
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();

    setOpen(false);

    router.push("/");

    router.refresh();
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className="
      bg-white
      border-b
      sticky
      top-0
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          text-2xl
          font-bold
          text-blue-600
          "
        >
          EventSphere
        </Link>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-6
          "
        >
          <Link href="/">Home</Link>

          <Link href="/events">Events</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/privacy">Privacy</Link>

          {isPending ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <Link
                href="/dashboard"
                className="
                  font-medium
                  "
              >
                Dashboard
              </Link>

              <span
                className="
                  text-gray-600
                  "
              >
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="
                  border
                  px-4
                  py-2
                  rounded-lg
                  "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                  bg-blue-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  "
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-2xl
          "
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          ref={menuRef}
          className="
            md:hidden
            border-t
            bg-white
            px-6
            py-5
            space-y-4
            shadow-lg
            "
        >
          <Link href="/" onClick={closeMenu} className="block">
            Home
          </Link>

          <Link href="/events" onClick={closeMenu} className="block">
            Events
          </Link>

          <Link href="/about" onClick={closeMenu} className="block">
            About
          </Link>

          <Link href="/contact" onClick={closeMenu} className="block">
            Contact
          </Link>

          <Link href="/privacy" onClick={closeMenu} className="block">
            Privacy
          </Link>

          {user ? (
            <>
              <Link href="/dashboard" onClick={closeMenu} className="block">
                Dashboard
              </Link>

              <div
                className="
                    flex
                    items-center
                    justify-between
                    "
              >
                <span
                  className="
                      text-gray-600
                      "
                >
                  {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      "
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/login" onClick={closeMenu} className="block">
                Login
              </Link>

              <Link href="/register" onClick={closeMenu} className="block">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
