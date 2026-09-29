"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart2, Star, Users, Share2, Play } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseDetailTabs } from "./CourseDetailTabs";
import { CourseDetailSidebar } from "./CourseDetailSidebar";
import { CourseDetailData } from "@/data/courseDetailData";

interface CourseDetailLayoutProps {
  course: CourseDetailData;
  activeTab: "about" | "lessons" | "reviews";
  children: React.ReactNode;
}

export function CourseDetailLayout({ course, activeTab, children }: CourseDetailLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#FAFAFA] font-sans text-neutral-900">
      {/* 1. Blueprint Grid Background for the Top Hero Banner */}
      <div className="bg-brand pointer-events-none absolute inset-x-0 top-0 z-0 h-[640px] overflow-hidden sm:h-[680px] lg:h-[720px]">
        {/* Grid pattern overlay */}
        <div className="bg-grid-pattern absolute inset-0 opacity-70" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(40,114,255,0.35),rgba(0,59,226,0))]" />
      </div>

      {/* 2. Global Navbar */}
      <Navbar />

      {/* 3. Main Page Content Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-24">
        {/* Top Header: Title, Author, Badges & Share Button */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div className="max-w-3xl">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {course.title}
            </h1>
            <p className="mt-2 font-sans text-sm text-white/80 sm:text-base">{course.subtitle}</p>

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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
                <BarChart2 className="h-3.5 w-3.5 text-white/90" />
                {course.level}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
                <Star className="h-3.5 w-3.5 fill-[#CBFC01] text-[#CBFC01]" />
                {course.rating} ({course.reviewsCount} reviews)
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
                <Users className="h-3.5 w-3.5 text-white/90" />
                {course.studentsCount} Students
              </span>
            </div>
          </div>

          {/* Share Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && navigator.clipboard) {
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

        {/* 4. Unified 2-Column Responsive Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (8 cols): Video Player + Tabs + Active Tab Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Video Player Preview */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-black/10 sm:rounded-3xl">
              <Image
                src={course.videoThumbnail}
                alt={course.title}
                fill
                priority
                className="object-cover object-top opacity-95"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {/* Play Button */}
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

            {/* Navigation Tabs Bar */}
            <div className="mt-8 sm:mt-10">
              <CourseDetailTabs courseId={course.id} activeTab={activeTab} />
            </div>

            {/* Tab Specific Content */}
            <div className="w-full">{children}</div>
          </div>

          {/* Right Column (4 cols): Sticky Course Sidebar Card */}
          <div className="[scrollbar-width:none] self-start lg:sticky lg:top-24 lg:col-span-5 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:rounded-3xl xl:col-span-4 [&::-webkit-scrollbar]:hidden">
            <CourseDetailSidebar course={course} />
          </div>
        </div>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
