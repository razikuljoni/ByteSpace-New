import { Metadata } from "next";
import { CourseDetailLayout } from "@/components/courses/details/CourseDetailLayout";
import { CourseAboutSection } from "@/components/courses/details/CourseAboutSection";
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
    title: `${course.title} - ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseDetailById(id);

  return (
    <CourseDetailLayout course={course} activeTab="about">
      <CourseAboutSection course={course} />
    </CourseDetailLayout>
  );
}
