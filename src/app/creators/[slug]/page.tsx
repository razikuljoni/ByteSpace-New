import { Metadata } from "next";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorCoursesView } from "@/components/creators/CreatorCoursesView";
import { Footer } from "@/components/layout/Footer";
import { getCreatorBySlug, getCoursesByCreator, getAllCreatorSlugs } from "@/data/creators";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllCreatorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  return {
    title: `${creator.name} - Creator Profile - ByteSpace`,
    description: creator.bioParagraphs[0],
  };
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);
  const courses = getCoursesByCreator(slug);

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
