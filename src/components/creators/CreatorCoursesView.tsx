"use client";

import React, { useState, useMemo } from "react";
import { BookOpen } from "lucide-react";
import { Course } from "@/types/course";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSE_CATEGORIES } from "@/data/courses";

interface CreatorCoursesViewProps {
  initialCourses: Course[];
}

const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export function CreatorCoursesView({ initialCourses }: CreatorCoursesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Level");
  const [selectedSort, setSelectedSort] = useState("relevant");

  const filteredCourses = useMemo(() => {
    let result = [...initialCourses];

    // Filter by Level
    if (selectedLevel !== "All Level") {
      result = result.filter((c) => c.level.toLowerCase() === selectedLevel.toLowerCase());
    }

    // Filter by Category
    if (selectedCategory !== "All" && selectedCategory !== "Featured") {
      result = result.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Sort
    result.sort((a, b) => {
      switch (selectedSort) {
        case "rating":
          return b.rating - a.rating;
        case "popular": {
          const aStudents = parseInt(a.studentCount) || 0;
          const bStudents = parseInt(b.studentCount) || 0;
          return bStudents - aStudents;
        }
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "relevant":
        default:
          return 0;
      }
    });

    return result;
  }, [initialCourses, selectedCategory, selectedLevel, selectedSort]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All Level");
    setSelectedSort("relevant");
  };

  return (
    <div className="w-full">
      {/* Reusable CourseFilters Bar (Chips hidden for clean Creator layout) */}
      <CourseFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        categories={COURSE_CATEGORIES}
        levels={LEVELS}
        showCategoryChips={false}
      />

      {/* 3-Column Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center shadow-xs">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="font-heading mt-4 text-lg font-bold text-neutral-900">No courses found</h3>
          <p className="mt-1 max-w-sm font-sans text-xs text-neutral-500 sm:text-sm">
            Try adjusting your level or category filters to discover more courses by this creator.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-5 rounded-full bg-neutral-950 px-5 py-2 font-sans text-xs font-semibold text-white transition-all hover:bg-neutral-800"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
