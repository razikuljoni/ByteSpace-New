"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-20 sm:py-28 lg:py-32">
      {/* ================= 3 AMBIENT GLOW OVERLAYS ================= */}

      {/* 1. Top-Center Lime Glow (Between Title & Paragraph) */}
      <div
        className="pointer-events-none absolute -top-38 left-[55%] h-[600px] w-[500px] -translate-x-1/2 rounded-full blur-[50px] lg:h-[750px] lg:w-[650px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.12) 55%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* 2. Top-Right / Far-Right Edge Lime Glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-[120px] h-[700px] w-[700px] rounded-full blur-[50px] lg:-right-[320px] lg:h-[800px] lg:w-[800px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.5) 0%, rgba(203, 252, 1, 0.14) 55%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* 3. Bottom-Left Blue Glow */}
      <div
        className="pointer-events-none absolute -bottom-[250px] -left-[250px] h-[650px] w-[650px] rounded-full blur-[50px] lg:h-[800px] lg:w-[800px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.06) 55%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER (SPLIT ROW) ================= */}
        <SectionHeader
          align="split"
          title={
            <>
              Discover What Our
              <br />
              Community Is Saying
            </>
          }
          subtitle="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
        />

        {/* ================= TESTIMONIALS GRID ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} className="h-full" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
