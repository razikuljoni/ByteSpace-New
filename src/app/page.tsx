import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { AboutSection } from "@/components/home/AboutSection";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { Testimonials } from "@/components/home/Testimonials";

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
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
