import React from "react";
import { Star } from "lucide-react";

export interface StarRatingProps {
  rating: number;
  maxStars?: number;
  showNumber?: boolean;
  numberClassName?: string;
  reviewsCount?: string | number;
  size?: "xs" | "sm" | "md";
  variant?: "lime" | "dark" | "gray";
  singleStar?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  maxStars,
  showNumber = false,
  numberClassName,
  reviewsCount,
  size = "sm",
  variant = "lime",
  singleStar = false,
  className = "",
}: StarRatingProps) {
  const sizeClasses = {
    xs: "h-3 w-3 sm:h-3.5 sm:w-3.5",
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
  }[size];

  const starColors = {
    lime: {
      filled: "fill-[#CBFC01] text-[#CBFC01]",
      empty: "fill-neutral-200 text-neutral-200",
    },
    dark: {
      filled: "fill-neutral-950 text-neutral-950",
      empty: "fill-neutral-200 text-neutral-200",
    },
    gray: {
      filled: "fill-[#CED0D3] text-[#CED0D3]",
      empty: "fill-[#CED0D3] text-[#CED0D3]",
    },
  }[variant];

  const count = singleStar ? 1 : (maxStars ?? Math.floor(rating));

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {showNumber && (
        <span className={numberClassName || "font-semibold"}>
          {typeof rating === "number" ? rating.toFixed(1) : rating}
        </span>
      )}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses} ${
              maxStars ? (i < rating ? starColors.filled : starColors.empty) : starColors.filled
            }`}
          />
        ))}
      </div>
      {reviewsCount && <span className="font-normal text-neutral-500">({reviewsCount})</span>}
    </div>
  );
}
