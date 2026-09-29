"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, Award, MessageSquare } from "lucide-react";
import { CourseDetailData } from "@/data/courseDetailData";

interface CourseDetailSidebarProps {
  course: CourseDetailData;
}

export function CourseDetailSidebar({ course }: CourseDetailSidebarProps) {
  const getInclusionIcon = (type: string) => {
    switch (type) {
      case "resources":
        return <BookOpen className="h-4 w-4 text-[#003BE2]" />;
      case "video":
        return <Video className="h-4 w-4 text-[#003BE2]" />;
      case "certificate":
        return <Award className="h-4 w-4 text-[#003BE2]" />;
      case "consultation":
        return <MessageSquare className="h-4 w-4 text-[#003BE2]" />;
      default:
        return <BookOpen className="h-4 w-4 text-[#003BE2]" />;
    }
  };

  return (
    <aside className="w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-7">
      {/* 1. Lessons Header & Preview List */}
      <div>
        <h3 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">
          {course.lessonsTotal} Lessons ({course.totalDuration})
        </h3>

        <ul className="mt-4 space-y-3.5 border-b border-neutral-100 pb-5">
          {course.previewLessons.map((lesson) => (
            <li
              key={lesson.number}
              className="flex items-start justify-between gap-3 text-xs sm:text-sm"
            >
              <div className="flex items-start gap-2.5">
                <span className="font-semibold text-neutral-950">{lesson.number}</span>
                <span className="text-neutral-800">{lesson.title}</span>
              </div>
              <span className="shrink-0 text-neutral-500">{lesson.duration}</span>
            </li>
          ))}
          <li className="pt-1 text-xs text-neutral-400">{course.moreVideosCount} more videos</li>
        </ul>
      </div>

      {/* 2. Enrollment Pitch & Price */}
      <div className="mt-5 border-b border-neutral-100 pb-6">
        <p className="font-sans text-xs leading-relaxed text-neutral-600">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="font-heading text-3xl font-bold tracking-tight text-[#003BE2]">
            ${course.price}
          </span>
          <span className="text-xs text-neutral-400">/{course.pricePeriod}</span>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-[#CBFC01] py-3 font-sans text-sm font-bold text-neutral-950 shadow-md transition-all hover:bg-[#CBFC01]/90 active:scale-95"
        >
          Enroll Now
        </button>
      </div>

      {/* 3. Inclusions List */}
      <div className="mt-6 border-b border-neutral-100 pb-6">
        <h4 className="font-heading text-sm font-bold text-neutral-950">This course include</h4>

        <ul className="mt-3.5 space-y-3">
          {course.inclusions.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700 sm:text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {getInclusionIcon(item.icon)}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Instructor Profile Card */}
      <div id="instructor" className="mt-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-neutral-200">
            <Image src={course.authorAvatar} alt={course.author} fill className="object-cover" />
          </div>
          <div>
            <h5 className="font-heading text-sm font-bold text-neutral-950">
              {course.author.replace(/^\w/, (c) => c.toUpperCase())}
            </h5>
            <p className="text-xs text-neutral-500">{course.authorRole}</p>
          </div>
        </div>

        <p className="mt-3 font-sans text-xs leading-relaxed text-neutral-600">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href={`/creators/${course.author}`}
          className="mt-3.5 inline-block rounded-full border border-neutral-300 px-5 py-2 font-sans text-xs font-semibold text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
