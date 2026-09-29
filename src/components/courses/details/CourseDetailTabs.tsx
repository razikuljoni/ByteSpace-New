"use client";

import Link from "next/link";

interface CourseDetailTabsProps {
  courseId: string;
  activeTab: "about" | "lessons" | "reviews";
}

export function CourseDetailTabs({ courseId, activeTab }: CourseDetailTabsProps) {
  const tabs = [
    { id: "about", label: "About", href: `/courses/${courseId}` },
    { id: "lessons", label: "Lesson", href: `/courses/${courseId}/lessons` },
    { id: "reviews", label: "Reviews", href: `/courses/${courseId}/reviews` },
  ] as const;

  return (
    <div className="flex items-center gap-2 border-b border-neutral-200 pb-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`rounded-full px-5 py-2 font-sans text-xs font-semibold transition-all sm:text-sm ${
              isActive
                ? "bg-[#CBFC01] text-neutral-950 shadow-xs"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
