import React from "react";
import { LucideIcon, BookOpen } from "lucide-react";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon = BookOpen,
  title,
  description,
  actionLabel,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center shadow-xs sm:py-20 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-heading mt-4 text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-1.5 max-w-sm font-sans text-xs text-neutral-500 sm:text-sm">{description}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-full bg-[#CBFC01] px-6 py-2.5 font-sans text-xs font-semibold text-neutral-950 shadow-xs transition-all hover:bg-[#CBFC01]/90 active:scale-95 sm:text-sm"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
