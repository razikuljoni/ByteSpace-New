"use client";

import Link from "next/link";
import { LearningPath } from "@/types/learningPath";

interface LearningPathCardProps {
  path: LearningPath;
  className?: string;
}

export function LearningPathCard({ path, className = "" }: LearningPathCardProps) {
  return (
    <Link
      href={path.href || "#"}
      className={`group relative flex flex-col items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-md sm:p-7 ${className}`}
    >
      {/* Lime Circle Icon Container */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4FB20] transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        {path.iconName === "design" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Pencil and Ruler */}
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
            <path d="M14.5 17.5 4.5 7.5" strokeDasharray="2 2" />
          </svg>
        )}

        {path.iconName === "development" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Code Braces */}
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        )}

        {path.iconName === "it-software" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Laptop */}
            <rect width="18" height="12" x="3" y="4" rx="2" />
            <line x1="2" x2="22" y1="20" y2="20" />
          </svg>
        )}

        {path.iconName === "business" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Business Office Building */}
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
            <path d="M12 18v4" />
          </svg>
        )}

        {path.iconName === "marketing" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Megaphone */}
            <path d="m3 11 18-5v12L3 13v-2z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        )}

        {path.iconName === "photography" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            {/* Camera */}
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        )}
      </div>

      {/* Label */}
      <span className="mt-4 font-sans text-sm font-medium text-neutral-900 transition-colors group-hover:text-[#003BE2] sm:mt-5 sm:text-base">
        {path.title}
      </span>
    </Link>
  );
}
