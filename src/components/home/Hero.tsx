"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { HappyStudentsBadge } from "@/components/ui/HappyStudentsBadge";

export function Hero() {
  return (
    <section className="bg-brand relative w-full overflow-hidden pt-28 pb-0 sm:pt-20 md:pt-28 lg:pt-32">
      {/* Blueprint Grid Lines Overlay - Full Bleed */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(40,114,255,0.35),rgba(0,59,226,0))]" />

      {/* Hero Header Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.12]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-white/85 sm:text-base md:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>

          {/* Search Input and Button */}
          <div className="mx-auto mt-8 max-w-xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-3 sm:gap-3.5"
            >
              <div className="focus-within:ring-accent flex flex-1 items-center rounded-full bg-white px-5 py-3 shadow-xl transition-all focus-within:ring-2">
                <Search className="mr-2.5 h-5 w-5 shrink-0 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none md:text-base"
                />
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 shrink-0 rounded-full px-7 py-3 font-sans text-sm font-medium text-neutral-950 shadow-md transition-all active:scale-95 md:px-8 md:text-base"
              >
                Search
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Full-Width Visual Area for 3D Edge Shapes & Center Student */}
      <div className="relative -mt-70 h-[460px] w-full sm:h-[580px] md:h-[680px] lg:h-[760px]">
        {/* ================= EDGE ATTACHED 3D SHAPES ================= */}

        {/* Top-Left Lime Spiral Coil (Touches Left Edge) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="pointer-events-none absolute top-[2%] -left-6 z-10 w-28 sm:top-[5%] sm:-left-8 sm:w-40 md:-left-10 md:w-56 lg:top-[6%] lg:-left-12 lg:w-68"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-helix-full-left-lime.png"
              alt="Lime 3D coil"
              width={260}
              height={340}
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Mid-Left Small White Helix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="pointer-events-none absolute top-[36%] left-[8%] z-10 w-14 sm:top-[38%] sm:left-[11%] sm:w-20 md:top-[40%] md:left-[13%] md:w-28 lg:left-[14%] lg:w-32"
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-helix-left-white.png"
              alt="White 3D spiral"
              width={130}
              height={170}
              className="h-auto w-full drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Bottom-Left White Torus / Donut (Touches Bottom-Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="pointer-events-none absolute -bottom-4 left-0 z-10 w-32 sm:bottom-2 sm:left-[2%] sm:w-48 md:bottom-6 md:left-[3%] md:w-64 lg:bottom-8 lg:left-[4%] lg:w-76"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-torus-white.png"
              alt="White 3D torus"
              width={300}
              height={300}
              className="h-auto w-full drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Top-Right Lime Cylinder (Touches Right Edge) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pointer-events-none absolute -top-4 -right-8 z-10 w-28 sm:-top-6 sm:-right-10 sm:w-40 md:-top-8 md:-right-12 md:w-56 lg:-top-10 lg:-right-14 lg:w-68"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 5.6, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-cylinder-lime.png"
              alt="Lime 3D cylinder"
              width={260}
              height={360}
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Mid-Right White Pyramid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pointer-events-none absolute top-[36%] right-[8%] z-10 w-16 sm:top-[38%] sm:right-[11%] sm:w-24 md:top-[40%] md:right-[13%] md:w-32 lg:right-[14%] lg:w-36"
        >
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-pyramid-white.png"
              alt="White 3D pyramid"
              width={150}
              height={150}
              className="h-auto w-full drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Bottom-Right White Helix (Touches Right Edge) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pointer-events-none absolute -right-4 bottom-4 z-10 w-28 sm:-right-6 sm:bottom-6 sm:w-40 md:-right-8 md:bottom-8 md:w-52 lg:right-10 lg:bottom-10 lg:w-64"
        >
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/shape-helix-right-white.png"
              alt="White 3D coil"
              width={240}
              height={300}
              className="h-auto w-full drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* ================= CENTER LIME ARCH BACKDROP ================= */}
        {/* Top of lime arch matches student head height, bottom sits at frame edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden">
          <div className="relative h-[360px] w-[500px] sm:h-[480px] sm:w-[680px] md:h-[580px] md:w-[820px] lg:h-[660px] lg:w-[940px]">
            <Image
              src="/assets/images/hero-arch-lime.png"
              alt="Lime arch backdrop"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* ================= CENTER STUDENT ================= */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <div className="relative h-[390px] w-[340px] sm:h-[520px] sm:w-[460px] md:h-[620px] md:w-[560px] lg:h-[700px] lg:w-[640px]">
            <Image
              src="/assets/images/hero-student.png"
              alt="Student holding laptop"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* ================= FLOATING METRIC CARDS ================= */}

        {/* Floating Card 1: UI/UX Design (Left of Student Head) */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[28%] left-[22%] z-20 hidden rounded-2xl border border-neutral-100/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.14)] sm:block md:top-[53%] md:left-[24%] md:p-4 lg:left-[26%]"
        >
          <p className="font-sans text-xs font-semibold text-neutral-900 md:text-sm">
            UI/UX Design
          </p>
          <p className="mt-0.5 font-sans text-[11px] text-neutral-500 md:text-xs">
            200 Courses &bull; 1000+ Students
          </p>
        </motion.div>

        {/* Floating Card 2: Learning Progress (Right of Student Head) */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="absolute top-[32%] right-[20%] z-20 hidden min-w-[170px] rounded-2xl border border-neutral-100/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.14)] sm:block md:top-[60%] md:right-[22%] md:min-w-[190px] md:p-4 lg:right-[32%]"
        >
          <p className="font-sans text-[11px] font-medium text-neutral-500 md:text-xs">
            Learning Progress
          </p>
          <p className="font-heading text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
            55%
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
            <div className="bg-accent h-full w-[55%] rounded-full" />
          </div>
        </motion.div>

        {/* Floating Card 3: Happy Students (Bottom-Left Overlapping Student) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-[8%] left-[14%] z-20 hidden sm:block md:bottom-[10%] md:left-[17%] lg:left-[23%]"
        >
          <HappyStudentsBadge layout="stacked" />
        </motion.div>
      </div>
    </section>
  );
}
