"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "split";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <div
        className={`grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-12 lg:gap-16 ${className}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.01em] text-[#242528] sm:text-4xl md:text-5xl md:leading-[1.18]">
            {title}
          </h2>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6"
          >
            <p className="font-sans text-sm leading-relaxed text-[#4B4C53] sm:text-base sm:leading-[160%]">
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl md:leading-[1.18]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
