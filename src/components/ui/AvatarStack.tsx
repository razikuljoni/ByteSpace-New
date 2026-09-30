import React from "react";
import Image from "next/image";

export interface AvatarStackProps {
  avatars: string[];
  max?: number;
  countText?: string;
  size?: "xs" | "sm" | "md";
  variant?: "lime" | "dark";
  className?: string;
}

export function AvatarStack({
  avatars,
  max = 4,
  countText,
  size = "md",
  variant = "lime",
  className = "",
}: AvatarStackProps) {
  const displayedAvatars = avatars.slice(0, max);

  const sizeClasses = {
    xs: {
      avatar: "h-5 w-5 ring-1.5 ring-white",
      space: "-space-x-1.5",
      badge: "h-5 w-5 text-[8px] ring-1.5 ring-white",
    },
    sm: {
      avatar: "h-5 w-5 sm:h-6 sm:w-6 ring-1.5 ring-white",
      space: "-space-x-1.5",
      badge: "h-5 w-5 sm:h-6 sm:w-6 text-[9px] ring-1.5 ring-white",
    },
    md: {
      avatar: "h-[32px] w-[32px]",
      space: "-space-x-2",
      badge: "h-[32px] w-[32px] text-[12px] font-medium",
    },
  }[size];

  const badgeVariantClasses = {
    lime: "bg-[#D4FB20] text-[#242528]",
    dark: "bg-neutral-950 text-white",
  }[variant];

  return (
    <div className={`flex items-center ${sizeClasses.space} ${className}`}>
      {displayedAvatars.map((url, idx) => (
        <div
          key={idx}
          className={`relative shrink-0 overflow-hidden rounded-full ${sizeClasses.avatar}`}
        >
          <Image src={url} alt={`Student ${idx + 1}`} fill sizes="32px" className="object-cover" />
        </div>
      ))}
      {countText && (
        <div
          className={`z-10 flex shrink-0 items-center justify-center rounded-full font-sans font-bold ${sizeClasses.badge} ${badgeVariantClasses}`}
        >
          {countText}
        </div>
      )}
    </div>
  );
}
