import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export const DEFAULT_HAPPY_STUDENTS_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&crop=faces&q=80",
];

export interface HappyStudentsBadgeProps {
  rating?: string;
  reviewsCount?: string | number;
  countText?: string;
  avatars?: string[];
  layout?: "stacked" | "split";
  variant?: "white" | "lime";
  className?: string;
}

export function HappyStudentsBadge({
  rating = "4.5",
  reviewsCount = "240",
  countText = "2K+",
  avatars = DEFAULT_HAPPY_STUDENTS_AVATARS,
  layout = "stacked",
  variant = "white",
  className = "",
}: HappyStudentsBadgeProps) {
  const isLime = variant === "lime";

  return (
    <div
      className={`w-fit rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.1)] ${
        isLime
          ? "bg-[#CBFC01] px-3 py-2.5 sm:px-3.5 sm:py-3"
          : "border border-neutral-100/90 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3"
      } ${className}`}
    >
      {/* Top Header: Title & Rating */}
      {layout === "split" ? (
        <div className="flex items-center justify-between gap-2.5">
          <p
            className={`font-heading text-xs font-semibold tracking-tight sm:text-sm ${
              isLime ? "font-bold text-neutral-950" : "text-[#1F2937]"
            }`}
          >
            Happy Students
          </p>
          <div
            className={`flex items-center gap-1 font-sans text-[11px] font-semibold sm:text-xs ${
              isLime ? "text-neutral-900" : "text-[#1F2937]"
            }`}
          >
            <span>{rating}</span>
            <span className={isLime ? "text-neutral-700" : "text-[#6B7280]"}>({reviewsCount})</span>
            <Star
              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${
                isLime ? "fill-[#003BE2] text-[#003BE2]" : "fill-[#CBFC01] text-[#CBFC01]"
              }`}
            />
          </div>
        </div>
      ) : (
        <div>
          <p
            className={`font-heading text-sm leading-none font-semibold tracking-tight sm:text-base ${
              isLime ? "font-bold text-neutral-950" : "text-[#1F2937]"
            }`}
          >
            Happy Students
          </p>
          <div className="mt-1 flex items-center gap-1 font-sans text-xs leading-none sm:text-[13px]">
            <span className={`font-semibold ${isLime ? "text-neutral-900" : "text-[#1F2937]"}`}>
              {rating}
            </span>
            <span className={isLime ? "text-neutral-700" : "font-normal text-[#6B7280]"}>
              ({reviewsCount})
            </span>
            <Star
              className={`h-3.5 w-3.5 ${
                isLime ? "fill-[#003BE2] text-[#003BE2]" : "fill-[#CBFC01] text-[#CBFC01]"
              }`}
            />
          </div>
        </div>
      )}

      {/* Overlapping Avatars: Left-to-Right Overlap with Positive Stacking Order */}
      <div className="mt-2.5 flex items-center">
        {avatars.map((url, idx) => (
          <div
            key={idx}
            style={{ zIndex: idx + 1 }}
            className={`relative -mr-2 h-7 w-7 shrink-0 overflow-hidden rounded-full sm:-mr-2.5 sm:h-8 sm:w-8 ${
              isLime ? "ring-1.5 ring-white" : ""
            }`}
          >
            <Image
              src={url}
              alt={`Student ${idx + 1}`}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        ))}

        {/* Far Right 2K+ Badge: Highest z-index to overlap the last avatar */}
        <div
          style={{ zIndex: avatars.length + 1 }}
          className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-sans text-[10px] font-bold shadow-xs sm:h-8 sm:w-8 sm:text-xs ${
            isLime
              ? "ring-1.5 bg-neutral-950 text-white ring-white"
              : "bg-[#CBFC01] text-neutral-950"
          }`}
        >
          {countText}
        </div>
      </div>
    </div>
  );
}
