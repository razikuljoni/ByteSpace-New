"use client";

import { motion } from "framer-motion";
import { LEARNING_PATHS } from "@/data/learningPaths";
import { LearningPathCard } from "@/components/ui/LearningPathCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LearningPaths() {
  return (
    <section className="relative w-full bg-white pb-14 sm:pb-18 lg:pb-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        {/* Learning Path Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6"
        >
          {LEARNING_PATHS.map((path) => (
            <LearningPathCard key={path.id} path={path} className="h-full" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
