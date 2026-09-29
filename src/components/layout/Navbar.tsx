"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12"
        aria-label="Global"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-95">
          <Image
            src="/assets/icons/logo.svg"
            alt="ByteSpace"
            width={28}
            height={30}
            className="h-7 w-auto"
            priority
          />
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-9 md:flex">
          <Link
            href="/"
            className="font-sans text-sm font-medium text-white transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Creators
          </Link>
        </div>

        {/* Desktop Auth & Cart */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/signin"
            className="font-sans text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="font-sans text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            aria-label="Shopping bag"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-all hover:bg-white/10 hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Shopping bag"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/90"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="bg-brand border-t border-white/10 px-6 py-5 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/80"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/80"
            >
              Creators
            </Link>
            <div className="my-2 border-t border-white/10" />
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/80"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-neutral-950"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
