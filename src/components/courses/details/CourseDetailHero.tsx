"use client";

import Image from "next/image";
import Link from "next/link";
import { BarChart2, Star, Users, Share2, Play } from "lucide-react";
import { CourseDetailData } from "@/data/courseDetailData";

interface CourseDetailHeroProps {
  course: CourseDetailData;
}

export function CourseDetailHero({ course }: CourseDetailHeroProps) {
  return (
    <div className="w-full">
      {/* Title & Metadata Header */}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        {/* Left Column: Heading, Subtitle, Author, Badges */}
        <div className="max-w-3xl">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2.5 font-sans text-sm text-white/80 sm:text-base">{course.subtitle}</p>

          <p className="mt-2 text-xs text-white/80 sm:text-sm">
            by{" "}
            <Link
              href="#instructor"
              className="font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              {course.author}
            </Link>
          </p>

          {/* Badges Row */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Level Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
              <BarChart2 className="h-3.5 w-3.5 text-white/90" />
              {course.level}
            </span>

            {/* Rating Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
              <Star className="h-3.5 w-3.5 fill-[#CBFC01] text-[#CBFC01]" />
              {course.rating} ({course.reviewsCount} reviews)
            </span>

            {/* Students Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
              <Users className="h-3.5 w-3.5 text-white/90" />
              {course.studentsCount} Students
            </span>
          </div>
        </div>

        {/* Right Column: Share Button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#CBFC01] px-5 py-2 font-sans text-xs font-semibold text-neutral-950 shadow-md transition-all hover:bg-[#CBFC01]/90 active:scale-95 sm:text-sm"
          >
            <Share2 className="h-3.5 w-3.5 text-neutral-950" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Video Player Preview Container */}
      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl sm:mt-10 sm:rounded-3xl">
        <Image
          src={course.videoThumbnail}
          alt={course.title}
          fill
          priority
          className="object-cover object-top opacity-95"
        />
        {/* Soft Dark Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/15" />

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-label="Play course preview video"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 sm:h-18 sm:w-18"
          >
            <Play className="ml-1 h-6 w-6 fill-neutral-900 text-neutral-900 transition-colors sm:h-7 sm:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
