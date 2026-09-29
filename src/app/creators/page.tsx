import { Metadata } from "next";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorCoursesView } from "@/components/creators/CreatorCoursesView";
import { Footer } from "@/components/layout/Footer";
import { getCreatorBySlug, getCoursesByCreator } from "@/data/creators";

export const metadata: Metadata = {
  title: "Creators - PurePearl Studio - ByteSpace",
  description: "Explore courses, workshops, and digital assets by top creators on ByteSpace.",
};

export default function CreatorsIndexPage() {
  const creator = getCreatorBySlug("purepearl-studio");
  const courses = getCoursesByCreator("purepearl-studio");

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-neutral-900">
      {/* 1. Creator Hero with Blueprint Grid Background */}
      <CreatorHero creator={creator} totalCourses={courses.length} />

      {/* 2. Course Catalog & Filters Section */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <CreatorCoursesView initialCourses={courses} />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
