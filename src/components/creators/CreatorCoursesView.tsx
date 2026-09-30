"use client";

import React, { useState, useMemo } from "react";
import { Course } from "@/types/course";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseCard } from "@/components/ui/CourseCard";
import { EmptyState } from "@/components/ui/EmptyState";
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
        <EmptyState
          className="mt-12"
          title="No courses found"
          description="Try adjusting your level or category filters to discover more courses by this creator."
          actionLabel="Reset Filters"
          onAction={handleResetFilters}
        />
      )}
    </div>
  );
}
