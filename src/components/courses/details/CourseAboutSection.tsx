"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CourseDetailData } from "@/data/courseDetailData";

interface CourseAboutSectionProps {
  course: CourseDetailData;
}

export function CourseAboutSection({ course }: CourseAboutSectionProps) {
  return (
    <div className="pt-6 sm:pt-8">
      {/* 1. Description */}
      <section>
        <h2 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">Description</h2>
        <div className="mt-4 space-y-4 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
          {course.descriptionParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Sneak Peak Images */}
      <section className="mt-8 sm:mt-10">
        <h2 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">Sneak Peak</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {course.sneakPeakImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-100 shadow-xs ring-1 ring-black/5"
            >
              <Image
                src={src}
                alt={`Sneak peak preview ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Key Points */}
      <section className="mt-8 sm:mt-10">
        <h2 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">Key Points</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:gap-3.5">
          {course.keyPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2.5 font-sans text-xs text-neutral-800 sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 fill-[#003BE2] text-white" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
