"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Course } from "@/types/course";
import { getCreatorSlug } from "@/data/creators";
import { AvatarStack } from "@/components/ui/AvatarStack";

interface CourseCardProps {
  course: Course;
  className?: string;
  priority?: boolean;
}

export function CourseCard({ course, className = "", priority = false }: CourseCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-[24px] border border-[#CED0D3] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div>
        {/* Course Thumbnail */}
        <div className="relative aspect-[341/195] w-full overflow-hidden rounded-[12px] bg-neutral-100">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Bottom Glass Pills Overlay */}
          <div className="absolute inset-x-2.5 bottom-2.5 flex flex-wrap items-center gap-1.5 sm:inset-x-3 sm:bottom-3 sm:gap-2">
            <span className="inline-flex h-[22px] items-center justify-center rounded-full bg-[#F6F6F6]/75 px-2 font-sans text-[10px] font-medium whitespace-nowrap text-[#4F4F4F] shadow-xs backdrop-blur-[6px] sm:h-[26px] sm:px-2.5 sm:text-xs">
              {course.lessonsCount} Lessons
            </span>
            <span className="inline-flex h-[22px] items-center justify-center rounded-full bg-[#F6F6F6]/75 px-2 font-sans text-[10px] font-medium whitespace-nowrap text-[#4F4F4F] shadow-xs backdrop-blur-[6px] sm:h-[26px] sm:px-2.5 sm:text-xs">
              {course.duration}
            </span>
            <span className="inline-flex h-[22px] items-center justify-center rounded-full bg-[#F6F6F6]/75 px-2 font-sans text-[10px] font-medium whitespace-nowrap text-[#4F4F4F] shadow-xs backdrop-blur-[6px] sm:h-[26px] sm:px-2.5 sm:text-xs">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Content Container (gap: 16px) */}
        <div className="mt-4 flex flex-col gap-4">
          {/* Title and Rating Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-[20px] font-semibold tracking-[-0.01em] text-black">
                <Link
                  href={`/courses/${course.id}`}
                  className="line-clamp-1 transition-colors hover:text-[#003BE2]"
                >
                  {course.title}
                </Link>
              </h3>
              <p className="font-sans text-[12px] leading-[160%] text-[#4F4F4F]">
                by{" "}
                <Link
                  href={`/creators/${getCreatorSlug(course.author)}`}
                  className="font-normal text-[#003BE2] transition-colors hover:underline"
                >
                  {course.author}
                </Link>
              </p>
            </div>

            {/* Rating */}
            <div className="flex shrink-0 items-center gap-1 font-sans text-[18px] leading-[160%] text-[#4F4F4F]">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="h-5 w-5 fill-[#CED0D3] text-[#CED0D3]" />
            </div>
          </div>

          {/* Level and Students Avatars Stack */}
          <div className="flex h-[32px] items-center justify-between gap-3">
            {/* Level Pill */}
            <div className="flex h-[32px] items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-3 py-1.5 font-sans text-[12px] font-medium text-[#4B4C53]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <rect x="4" y="12" width="2.5" height="5" rx="0.75" fill="#4B4C53" />
                <rect x="8.75" y="8" width="2.5" height="9" rx="0.75" fill="#4B4C53" />
                <rect x="13.5" y="4" width="2.5" height="13" rx="0.75" fill="#4B4C53" />
              </svg>
              <span>{course.level}</span>
            </div>

            {/* Avatars Stack */}
            <AvatarStack
              avatars={course.studentAvatars}
              max={4}
              countText={course.studentCount}
              size="md"
              variant="lime"
            />
          </div>

          {/* Price */}
          <div className="flex items-end">
            <span className="font-heading text-[20px] font-semibold tracking-[-0.01em] text-[#003BE2]">
              ${course.price}
            </span>
            <span className="pb-1 font-sans text-[12px] leading-[160%] text-[#4F4F4F]">
              /{course.pricePeriod || "lifetime"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
