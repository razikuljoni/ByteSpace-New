"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSE_CATEGORIES, COURSES } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");

  // Filter courses based on selected category (if 'Featured', display all featured courses)
  const displayedCourses =
    selectedCategory === "Featured"
      ? COURSES.filter((c) => c.featured)
      : COURSES.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Categories Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-2.5"
        >
          {COURSE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 font-sans text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-accent text-neutral-950 shadow-xs"
                    : "bg-[#F4F4F6] text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {category}
              </button>
            );
          })}

          <button
            type="button"
            className="text-brand hover:text-brand/80 px-3 py-2 font-sans text-xs font-medium transition-colors hover:underline sm:text-sm"
          >
            + More
          </button>
        </motion.div>

        {/* Courses Grid */}
        <div className="mt-12 sm:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
            >
              {displayedCourses.length > 0 ? (
                displayedCourses.map((course, idx) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    priority={idx < 3}
                    className="h-full"
                  />
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <p className="font-heading text-lg font-medium text-neutral-700">
                    No courses found in this category yet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("Featured")}
                    className="text-brand hover:text-brand/80 mt-3 font-sans text-sm font-semibold underline"
                  >
                    View Featured Courses
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
