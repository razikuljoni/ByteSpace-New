"use client";

import { SlidersHorizontal, ChevronDown, GraduationCap, Shapes, ArrowUpDown } from "lucide-react";

interface CourseFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  categories: readonly string[];
  levels: readonly string[];
}

export function CourseFilters({
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  selectedSort,
  onSortChange,
  categories,
  levels,
}: CourseFiltersProps) {
  return (
    <div className="w-full space-y-5">
      {/* Top Filter Bar: Dropdowns & Sort with consistent icons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left Filter Actions */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Main Filter Button */}
          <button
            type="button"
            onClick={() => {
              onCategoryChange("Featured");
              onLevelChange("All Level");
            }}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 font-sans text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 sm:text-sm"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-neutral-600" />
            <span>Filter</span>
          </button>

          {/* Level Dropdown with GraduationCap Icon */}
          <div className="relative flex items-center">
            <GraduationCap className="pointer-events-none absolute top-1/2 left-3.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-600" />
            <select
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-white py-2 pr-8 pl-9 font-sans text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none sm:text-sm"
              aria-label="Filter by difficulty level"
            >
              <option value="All Level">All Level</option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" />
          </div>

          {/* Category Dropdown with Shapes Icon */}
          <div className="relative flex items-center">
            <Shapes className="pointer-events-none absolute top-1/2 left-3.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-600" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-white py-2 pr-8 pl-9 font-sans text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none sm:text-sm"
              aria-label="Filter by category"
            >
              <option value="All">Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" />
          </div>
        </div>

        {/* Right Sort Dropdown with ArrowUpDown Icon */}
        <div className="relative flex items-center">
          <ArrowUpDown className="pointer-events-none absolute top-1/2 left-3.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-600" />
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="cursor-pointer appearance-none rounded-full border border-neutral-200 bg-white py-2 pr-8 pl-9 font-sans text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none sm:text-sm"
            aria-label="Sort courses"
          >
            <option value="relevant">Most Relevant</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" />
        </div>
      </div>

      {/* Bottom Category Chips Bar (Horizontal Scrollable) */}
      <div className="no-scrollbar flex items-center gap-2.5 overflow-x-auto pb-1 sm:gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`shrink-0 rounded-full px-4.5 py-2 font-sans text-xs font-medium transition-all sm:text-sm ${
                isActive
                  ? "bg-[#CBFC01] text-neutral-950 shadow-xs ring-1 ring-[#CBFC01]"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
