"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import {
  CourseDetailData,
  DEFAULT_REVIEWS,
  DEFAULT_RATINGS_BREAKDOWN,
} from "@/data/courseDetailData";

interface CourseReviewsSectionProps {
  course: CourseDetailData;
}

export function CourseReviewsSection({ course }: CourseReviewsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const reviews = course.reviews && course.reviews.length > 0 ? course.reviews : DEFAULT_REVIEWS;
  const ratingsBreakdown =
    course.ratingsBreakdown && course.ratingsBreakdown.length > 0
      ? course.ratingsBreakdown
      : DEFAULT_RATINGS_BREAKDOWN;

  const filteredReviews =
    selectedFilter === null ? reviews : reviews.filter((r) => r.rating === selectedFilter);

  const filterOptions = [
    { label: "All rating", value: null },
    { label: "5", value: 5 },
    { label: "4", value: 4 },
    { label: "3", value: 3 },
    { label: "2", value: 2 },
    { label: "1", value: 1 },
  ];

  return (
    <div className="pt-6 sm:pt-8">
      {/* 1. Header */}
      <section>
        <h2 className="font-heading text-lg font-bold text-neutral-950 sm:text-xl">
          What Learners Are Saying
        </h2>
        <p className="mt-2 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Discover what our learners have to say about their experiences with &apos;{course.title}
          &apos;. Read reviews and ratings from individuals who have embarked on this transformative
          journey of mastering digital asset creation.
        </p>
      </section>

      {/* 2. Ratings Overview Card */}
      <section className="mt-6 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs sm:p-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          {/* Lime ratings badge */}
          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#CBFC01] sm:h-32 sm:w-32">
            <span className="font-sans text-xs font-semibold text-neutral-800">Ratings</span>
            <span className="font-heading mt-0.5 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              {course.rating.toFixed(1)}
            </span>
          </div>

          {/* 5 Rating Breakdown Bars */}
          <div className="w-full flex-1 space-y-2.5 sm:space-y-3">
            {ratingsBreakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 sm:gap-4">
                {/* Horizontal Progress Bar */}
                <div className="h-2 w-full flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-[#CBFC01] transition-all duration-500"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>

                {/* Stars Group */}
                <StarRating rating={row.stars} maxStars={5} size="xs" variant="dark" />

                {/* Review Count */}
                <span className="w-8 shrink-0 text-right font-sans text-xs font-medium text-neutral-600">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Individual Reviews Filter */}
      <section className="mt-8 sm:mt-10">
        <h3 className="font-heading text-base font-bold text-neutral-950 sm:text-lg">
          Individual Reviews:
        </h3>
        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter.value;
            return (
              <button
                key={filter.label}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-sans text-xs transition-all ${
                  isActive
                    ? "bg-[#CBFC01] font-semibold text-neutral-950 shadow-xs"
                    : "bg-neutral-100 font-medium text-neutral-700 hover:bg-neutral-200/70"
                }`}
              >
                {filter.value !== null && <Star className="h-3 w-3 fill-current text-current" />}
                <span>{filter.value !== null ? filter.label : "All rating"}</span>
              </button>
            );
          })}
        </div>

        {/* 4. Reviews List */}
        <div className="mt-6 space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs sm:p-6"
              >
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-black/5">
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold text-neutral-950 sm:text-sm">
                        {review.author}
                      </h4>
                      <p className="font-sans text-[11px] text-neutral-500 sm:text-xs">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <span className="font-sans text-xs text-neutral-400">{review.timeAgo}</span>
                </div>

                {/* Stars Rating */}
                <StarRating rating={review.rating} size="sm" variant="dark" className="mt-3" />

                {/* Review Text */}
                <p className="mt-3 font-sans text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 text-center">
              <p className="font-sans text-xs text-neutral-500 sm:text-sm">
                No reviews found for this rating filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
