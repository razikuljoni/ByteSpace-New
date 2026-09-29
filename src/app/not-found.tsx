import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#003BE2] font-sans text-white">
      {/* 1. Blueprint Grid Background Hero */}
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Background Grid & Glow Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="bg-grid-pattern absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(40,114,255,0.35),rgba(0,59,226,0))]" />
        </div>

        {/* Global Navbar */}
        <Navbar />

        {/* Center 404 Visual & Content */}
        <main className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:pt-36 sm:pb-28">
          {/* Giant 404 Gradient Number */}
          <div className="font-heading text-[140px] leading-none font-black tracking-tight select-none sm:text-[200px] md:text-[260px] lg:text-[300px]">
            <span className="bg-gradient-to-b from-[#CBFC01] via-[#CBFC01]/70 to-[#CBFC01]/5 bg-clip-text text-transparent">
              404
            </span>
          </div>

          {/* Overlapping Headline, Description, and CTA */}
          <div className="relative z-10 -mt-16 max-w-2xl px-4 sm:-mt-24 md:-mt-32">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              The page you are looking
              <br />
              for doesn&apos;t exist
            </h1>
            <p className="mt-3.5 font-sans text-xs text-white/80 sm:mt-4 sm:text-sm">
              Try to use a correct url or go back to homepage to start again
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#CBFC01] px-7 py-2.5 font-sans text-xs font-semibold text-neutral-950 shadow-md transition-all hover:bg-[#CBFC01]/90 active:scale-95 sm:text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* 2. Global Footer */}
      <Footer />
    </div>
  );
}
