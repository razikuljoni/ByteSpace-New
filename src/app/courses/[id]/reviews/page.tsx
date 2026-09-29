import { Metadata } from "next";
import { CourseDetailLayout } from "@/components/courses/details/CourseDetailLayout";
import { CourseReviewsSection } from "@/components/courses/details/CourseReviewsSection";
import { getCourseDetailById } from "@/data/courseDetailData";
import { COURSES } from "@/data/courses";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const ids = ["build-digital-asset", ...COURSES.map((c) => c.id)];
  return Array.from(new Set(ids)).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseDetailById(id);
  return {
    title: `${course.title} - Reviews - ByteSpace`,
    description: `Read student reviews and ratings for ${course.title}`,
  };
}

export default async function CourseReviewsPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseDetailById(id);

  return (
    <CourseDetailLayout course={course} activeTab="reviews">
      <CourseReviewsSection course={course} />
    </CourseDetailLayout>
  );
}
