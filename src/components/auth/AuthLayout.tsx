"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlueGridBackground } from "@/components/ui/BlueGridBackground";
import { AuthVisualComposition } from "./AuthVisualComposition";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <BlueGridBackground className="min-h-screen" glow={true}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-8 lg:px-12">
        {/* Top Header: ByteSpace Logo */}
        <header className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            aria-label="Back to home"
          >
            <Image
              src="/assets/icons/logo.svg"
              alt="ByteSpace logo"
              width={34}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </header>

        {/* Main Content Area: 2-Column Responsive Grid */}
        <main className="my-auto py-8 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading + Visual Composition */}
            <div className="flex flex-col items-start lg:col-span-6 xl:col-span-6">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-white/80 sm:text-base">
                {description}
              </p>

              {/* Layered Composition */}
              <div className="w-full">
                <AuthVisualComposition />
              </div>
            </div>

            {/* Right Column: Auth Form Card Slot */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end xl:col-span-6">
              {children}
            </div>
          </div>
        </main>

        {/* Bottom Footer */}
        <footer className="py-2 text-center text-xs text-white/40">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </footer>
      </div>
    </BlueGridBackground>
  );
}
