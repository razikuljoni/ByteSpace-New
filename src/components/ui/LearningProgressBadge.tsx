import React from "react";

export interface LearningProgressBadgeProps {
  progress?: number;
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

export function LearningProgressBadge({
  progress = 55,
  label = "Learning Progress",
  size = "md",
  className = "",
}: LearningProgressBadgeProps) {
  const isSm = size === "sm";

  return (
    <div
      className={`rounded-2xl border border-neutral-100/90 bg-white shadow-[0_16px_32px_rgba(0,0,0,0.1)] ${
        isSm ? "p-3.5 sm:p-4" : "p-4 sm:p-5"
      } ${className}`}
    >
      <p
        className={`font-sans font-medium text-neutral-600 ${
          isSm ? "text-[11px] md:text-xs" : "text-xs text-[#242528] sm:text-sm"
        }`}
      >
        {label}
      </p>

      <p
        className={`font-heading font-bold tracking-tight text-neutral-900 ${
          isSm
            ? "mt-0.5 text-2xl md:text-3xl"
            : "mt-1 text-3xl font-semibold tracking-[-0.01em] text-[#242528] sm:text-[40px] sm:leading-[1.15]"
        }`}
      >
        {progress}%
      </p>

      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
        <div
          className="bg-accent h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}
