"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it-software" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "/register?role=creator" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col items-start lg:col-span-5 xl:col-span-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <Image
                src="/assets/icons/logo.svg"
                alt="ByteSpace logo"
                width={28}
                height={30}
                className="h-7 w-auto"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-neutral-950">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Text */}
            <p className="mt-6 font-sans text-sm leading-relaxed text-neutral-600 sm:text-base">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="xs:flex-row xs:items-center mt-6 flex w-full max-w-md flex-row items-stretch gap-3 lg:flex-col"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email address"
                className="w-full flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-[#003BE2] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 shrink-0 rounded-full px-7 py-3 text-center font-sans text-sm font-medium text-neutral-950 shadow-xs transition-all active:scale-95"
              >
                Subscribe
              </button>
            </form>

            {/* Terms / Disclaimer */}
            <p className="mt-3 font-sans text-xs leading-normal text-neutral-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* Right Navigation Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:col-span-7 xl:col-span-7">
            {FOOTER_COLUMNS.map((col, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-4">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-neutral-700 transition-colors hover:text-[#003BE2]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Bar Divider & Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:mt-20 sm:flex-row">
          <p className="font-sans text-xs text-neutral-500">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-sans text-xs text-neutral-500 sm:gap-8">
            <Link href="/privacy" className="transition-colors hover:text-neutral-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-neutral-900">
              Terms of Service
            </Link>
            <button
              type="button"
              className="cursor-pointer transition-colors hover:text-neutral-900"
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
