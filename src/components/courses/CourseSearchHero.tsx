"use client";

import { Search, ChevronDown } from "lucide-react";
import { BlueGridBackground } from "@/components/ui/BlueGridBackground";

interface CourseSearchHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: readonly string[];
}

export function CourseSearchHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: CourseSearchHeroProps) {
  return (
    <BlueGridBackground className="pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Main Title */}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]">
          Find Your Next Course
        </h1>

        {/* Search Bar Container */}
        <div className="mx-auto mt-6 flex max-w-2xl items-center gap-2.5 sm:mt-8 sm:gap-3">
          {/* Wider Search Input */}
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search"
              className="w-full rounded-full border-none bg-white py-2.5 pr-4 pl-10 font-sans text-xs text-neutral-900 shadow-md transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-[#CBFC01] focus:outline-none sm:py-3 sm:pl-11 sm:text-sm"
            />
          </div>

          {/* Compact Courses Dropdown Button */}
          <div className="relative shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full bg-[#CBFC01] py-2.5 pr-6 pl-4 font-sans text-xs font-semibold text-neutral-950 shadow-md transition-all hover:bg-[#CBFC01]/90 focus:outline-none sm:py-3 sm:pr-6 sm:pl-3 sm:text-sm"
              aria-label="Filter by course category"
            >
              <option value="All">Courses</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-950 sm:right-3 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}
