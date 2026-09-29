import { Suspense } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Explore Courses - ByteSpace",
  description:
    "Discover thousands of top-rated online courses in design, development, marketing, data science, and more on ByteSpace.",
};

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] font-sans text-neutral-900">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA]">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-[#003BE2]" />
            </div>
          }
        >
          <CourseCatalog />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
