"use client";

import Image from "next/image";
import { Star, BarChart3 } from "lucide-react";

const HAPPY_STUDENTS_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
];

const CARD_STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
];

export function AuthVisualComposition() {
  return (
    <div className="relative mx-auto mt-6 w-full max-w-[500px] select-none sm:mt-10 lg:mx-0">
      <div className="relative h-[420px] w-full sm:h-[460px]">
        {/* 1. 3D Torus Ring Shape - Top Left */}
        <div className="pointer-events-none absolute -top-4 left-4 z-30 h-16 w-16 sm:left-8 sm:h-20 sm:w-20">
          <Image
            src="/assets/images/shape-torus-full-lime.png"
            alt="3D lime ring"
            width={80}
            height={80}
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </div>

        {/* 2. Background Course Card (Build Digital Asset) - Offset Left/Back */}
        <div className="absolute top-10 left-0 z-10 w-[240px] rounded-2xl bg-white p-3 shadow-xl sm:top-12 sm:left-2 sm:w-[280px] sm:p-4">
          {/* Card Preview Image */}
          <div className="relative h-28 w-full overflow-hidden rounded-xl bg-neutral-100 sm:h-32">
            <Image
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80"
              alt="Build Digital Asset preview"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-2 left-2 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
              17 Lessons
            </div>
          </div>

          {/* Card Content */}
          <div className="mt-3">
            <h4 className="font-heading truncate text-sm font-bold text-neutral-900">
              Build Digital Asset
            </h4>
            <p className="mt-0.5 text-[11px] text-neutral-500">by purepearl studio</p>

            <div className="mt-2.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                <BarChart3 className="h-3 w-3 text-neutral-500" />
                Beginner
              </span>

              {/* Avatar stack */}
              <div className="flex items-center -space-x-1.5">
                {CARD_STUDENT_AVATARS.slice(0, 3).map((avatar, idx) => (
                  <div
                    key={idx}
                    className="ring-1.5 relative h-5 w-5 overflow-hidden rounded-full ring-white"
                  >
                    <Image src={avatar} alt="Student avatar" fill className="object-cover" />
                  </div>
                ))}
                <div className="ring-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-[8px] font-bold text-white ring-white">
                  26+
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-1 border-t border-neutral-100 pt-2">
              <span className="font-heading text-sm font-bold text-[#003BE2]">$25</span>
              <span className="text-[10px] text-neutral-400">/lifetime</span>
            </div>
          </div>
        </div>

        {/* 3. Foreground Main Course Card (the Power of Big Data) - Front Right */}
        <div className="absolute top-2 right-0 z-20 w-[260px] rounded-2xl bg-white p-3.5 shadow-2xl ring-1 ring-black/5 sm:top-0 sm:right-2 sm:w-[320px] sm:p-4">
          {/* Card Preview Image with Data Charts */}
          <div className="relative h-32 w-full overflow-hidden rounded-xl bg-neutral-900 sm:h-36">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
              alt="the Power of Big Data chart preview"
              fill
              className="object-cover"
            />
            {/* Meta Overlay Pills */}
            <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs sm:text-[10px]">
                17 Lessons
              </span>
              <span className="rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs sm:text-[10px]">
                2 hours 16 mins
              </span>
              <span className="hidden rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs sm:inline-block sm:text-[10px]">
                59 Comments
              </span>
            </div>
          </div>

          {/* Course Details */}
          <div className="mt-3">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-heading truncate text-sm font-bold text-neutral-900 sm:text-base">
                the Power of Big Data
              </h4>
              <div className="flex shrink-0 items-center gap-0.5 font-sans text-xs font-semibold text-neutral-900">
                <span>4.5</span>
                <Star className="h-3.5 w-3.5 fill-[#CBFC01] text-[#CBFC01]" />
              </div>
            </div>

            <p className="mt-0.5 text-[11px] text-neutral-500">by purepearl studio</p>

            <div className="mt-2.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                <BarChart3 className="h-3 w-3 text-neutral-500" />
                Beginner
              </span>

              {/* Avatar stack */}
              <div className="flex items-center -space-x-1.5">
                {CARD_STUDENT_AVATARS.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="ring-1.5 relative h-5 w-5 overflow-hidden rounded-full ring-white sm:h-6 sm:w-6"
                  >
                    <Image src={avatar} alt="Student avatar" fill className="object-cover" />
                  </div>
                ))}
                <div className="ring-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-[9px] font-bold text-white ring-white sm:h-6 sm:w-6">
                  26+
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-1 border-t border-neutral-100 pt-2">
              <span className="font-heading text-base font-bold text-[#003BE2]">$25</span>
              <span className="text-xs text-neutral-400">/lifetime</span>
            </div>
          </div>
        </div>

        {/* 4. 3D Lime Pyramid Shape - Bottom Left */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-20 w-20 sm:bottom-2 sm:left-2 sm:h-24 sm:w-24">
          <Image
            src="/assets/images/cta-shape-pyramid-lime.png"
            alt="3D lime pyramid"
            width={96}
            height={96}
            className="h-full w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 5. 3D White Squiggle/Spring Helix Shape - Right */}
        <div className="pointer-events-none absolute right-[-10px] bottom-14 z-30 h-24 w-24 sm:right-[-20px] sm:bottom-16 sm:h-28 sm:w-28">
          <Image
            src="/assets/images/shape-helix-small-white-2.png"
            alt="3D white spring helix"
            width={112}
            height={112}
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </div>

        {/* 6. Lime "Happy Students" Floating Pill Card - Bottom Center/Right */}
        <div className="absolute right-6 bottom-4 z-30 rounded-2xl bg-[#CBFC01] p-3 shadow-xl sm:right-10 sm:bottom-6 sm:p-3.5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-heading text-xs font-bold text-neutral-950">Happy Students</span>
            <div className="flex items-center gap-0.5 text-[11px] font-semibold text-neutral-900">
              <span>4.5 (240)</span>
              <Star className="h-3 w-3 fill-[#003BE2] text-[#003BE2]" />
            </div>
          </div>

          <div className="mt-2 flex items-center -space-x-1.5">
            {HAPPY_STUDENTS_AVATARS.map((avatar, idx) => (
              <div
                key={idx}
                className="ring-1.5 relative h-6 w-6 overflow-hidden rounded-full ring-white"
              >
                <Image src={avatar} alt="Happy student avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="ring-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950 text-[9px] font-bold text-white ring-white">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
