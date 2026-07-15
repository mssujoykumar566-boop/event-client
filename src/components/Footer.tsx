"use client";

import Link from "next/link";
import {
  LogoGithub,
  LogoLinkedin,
  LogoFacebook,
  LogoTelegram,
  MapPin,
  Handset,
  Envelope,
} from "@gravity-ui/icons";

const footerLinks = {
  platform: [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Create Event", href: "/create-event" },
  ],

  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Event<span className="text-blue-500">Flow</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              A smart event management platform to discover, organize and manage
              events easily.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full border border-slate-700 p-2 hover:bg-slate-800"
              >
                <LogoGithub width={18} height={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full border border-slate-700 p-2 hover:bg-slate-800"
              >
                < LogoLinkedin width={18} height={18} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full border border-slate-700 p-2 hover:bg-slate-800"
              >
                < LogoFacebook width={18} height={18} />
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white">Platform</h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-4 text-sm">
              <p className="flex gap-3">
                <MapPin width={18} />
                Dhaka, Bangladesh
              </p>

              <p className="flex gap-3">
                <Handset width={18} />
                +880 1234-567890
              </p>

              <p className="flex gap-3">
                <Envelope width={18} />
                support@eventflow.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} EventFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
