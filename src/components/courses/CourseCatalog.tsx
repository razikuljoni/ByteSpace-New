"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { CourseSearchHero } from "./CourseSearchHero";
import { CourseFilters } from "./CourseFilters";
import { COURSES, COURSE_CATEGORIES } from "@/data/courses";

const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
const COURSES_PER_PAGE = 18;

export function CourseCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Featured";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState("All Level");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever filters change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleLevelChange = (lvl: string) => {
    setSelectedLevel(lvl);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    // Generate an extended course pool so there are multiple pages (5 pages = 90 items)
    const expandedPool = [];
    const repeatCount = 10;
    for (let r = 0; r < repeatCount; r++) {
      for (let i = 0; i < COURSES.length; i++) {
        expandedPool.push({
          ...COURSES[i],
          id: `${COURSES[i].id}-p${r}-${i}`,
        });
      }
    }

    let result = expandedPool;

    // Category filter
    if (selectedCategory && selectedCategory !== "Featured" && selectedCategory !== "All") {
      result = result.filter(
        (course) => course.category?.toLowerCase() === selectedCategory.toLowerCase(),
      );
    } else if (selectedCategory === "Featured") {
      const featured = result.filter((c) => c.featured);
      if (featured.length > 0) {
        result = featured;
      }
    }

    // Level filter
    if (selectedLevel && selectedLevel !== "All Level") {
      result = result.filter(
        (course) => course.level.toLowerCase() === selectedLevel.toLowerCase(),
      );
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(q) ||
          course.author.toLowerCase().includes(q) ||
          course.category?.toLowerCase().includes(q),
      );
    }

    // Sorting
    if (selectedSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, selectedSort]);

  // Total pages (capped at 5 or dynamic)
  const calculatedPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const totalPages = Math.max(1, Math.min(calculatedPages, 5));

  const displayedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* 1. Hero Search Header Banner */}
      <CourseSearchHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={COURSE_CATEGORIES}
      />

      {/* 2. Main Content Catalog Container */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
        {/* Filters and Categories Toolbar */}
        <CourseFilters
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
          categories={COURSE_CATEGORIES}
          levels={LEVELS}
        />

        {/* 3. Courses Grid (3 Columns, ~18-20 courses per page) */}
        <div className="mt-8 sm:mt-10">
          {displayedCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {displayedCourses.map((course, idx) => (
                <CourseCard
                  key={course.id || idx}
                  course={course}
                  priority={idx < 6 && currentPage === 1}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="font-heading mt-4 text-lg font-bold text-neutral-900">
                No courses found
              </h3>
              <p className="mt-1.5 max-w-sm text-sm text-neutral-500">
                We couldn&apos;t find any courses matching your criteria. Try adjusting your search
                or filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Featured");
                  setSelectedLevel("All Level");
                }}
                className="mt-6 rounded-full bg-[#CBFC01] px-6 py-2.5 font-sans text-sm font-semibold text-neutral-950 shadow-xs transition-all hover:bg-[#CBFC01]/90"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* 4. Bottom Pagination (Arrows + 1 2 3 4 5) */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3 sm:mt-20 sm:gap-4">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-colors hover:border-neutral-400 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Numeric Page Buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => goToPage(pageNum)}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-9 w-9 items-center justify-center rounded-full font-sans text-xs transition-colors sm:h-10 sm:w-10 sm:text-sm ${
                      isActive
                        ? "font-bold text-neutral-950"
                        : "font-normal text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-colors hover:border-neutral-400 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-35 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
