"use client";

import React from "react";
import { Video } from "lucide-react";
import { CourseDetailData, DEFAULT_MODULES } from "@/data/courseDetailData";
import { LearningProgressBadge } from "@/components/ui/LearningProgressBadge";

interface CourseLessonsSectionProps {
  course: CourseDetailData;
}

export function CourseLessonsSection({ course }: CourseLessonsSectionProps) {
  const modules = course.modules && course.modules.length > 0 ? course.modules : DEFAULT_MODULES;
  const progress = course.learningProgress ?? 55;

  return (
    <div className="pt-6 sm:pt-8">
      {/* 1. Explore the Modules Header */}
      <section>
        <h2 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">
          Explore the Modules
        </h2>
        <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Immerse yourself in the course content as we break down each module into comprehensive
          lessons, providing practical insights and hands-on experiences.
        </p>
      </section>

      {/* 2. Lesson List */}
      <section className="mt-8 sm:mt-10">
        <h3 className="font-heading text-base font-bold text-neutral-950 sm:text-lg">
          Lesson List
        </h3>
        <div className="mt-4 space-y-4 sm:space-y-5">
          {modules.map((moduleItem, idx) => (
            <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CBFC01] text-neutral-950 shadow-xs sm:h-11 sm:w-11">
                <Video className="h-5 w-5 fill-neutral-950 text-neutral-950" />
              </div>
              <div className="pt-0.5">
                <h4 className="font-heading text-xs font-bold text-neutral-950 sm:text-sm">
                  {moduleItem.moduleNumber}: {moduleItem.title}
                </h4>
                <p className="mt-1 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {moduleItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Lesson Content */}
      <section className="mt-8 sm:mt-10">
        <h3 className="font-heading text-base font-bold text-neutral-950 sm:text-lg">
          Lesson Content
        </h3>
        <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Engage with each lesson through captivating video content, detailed textual explanations,
          and interactive elements. Download resources, complete assignments, and test your
          understanding with quizzes.
        </p>
      </section>

      {/* 4. Lesson Progress Tracking */}
      <section className="mt-8 sm:mt-10">
        <h3 className="font-heading text-base font-bold text-neutral-950 sm:text-lg">
          Lesson Progress Tracking
        </h3>
        <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Witness your growth as you complete lessons with an intuitive progress tracking feature
          guiding you through your learning journey.
        </p>

        {/* Progress Card */}
        <div className="mt-4">
          <LearningProgressBadge progress={progress} size="md" />
        </div>
      </section>
    </div>
  );
}
