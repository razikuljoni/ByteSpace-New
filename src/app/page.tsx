import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { AboutSection } from "@/components/home/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-neutral-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PartnerLogos />
        <FeaturedCourses />
        <LearningPaths />
        <AboutSection />
      </main>
    </div>
  );
}
