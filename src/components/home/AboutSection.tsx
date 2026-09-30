"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsBadge } from "@/components/ui/HappyStudentsBadge";
import { LearningProgressBadge } from "@/components/ui/LearningProgressBadge";
import { FloatingShape } from "@/components/ui/FloatingShape";

const INSTRUCTOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function AboutSection() {
  const figmaCourse = COURSES[0];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-10 md:pt-20">
      {/* ================= ATMOSPHERIC GLOW ELLIPSES BACKGROUND ================= */}
      {/* Top-Left Lime Glow */}
      <div
        className="pointer-events-none absolute -top-[250px] -left-[50px] h-[900px] w-[900px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.12) 53%, rgba(203, 252, 1, 0.03) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />
      {/* Bottom-Left Lime Glow */}
      <div
        className="pointer-events-none absolute -bottom-[150px] -left-[300px] h-[750px] w-[750px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.15) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />
      {/* Top-Right Soft Blue Glow */}
      <div
        className="pointer-events-none absolute -top-[100px] right-[5%] h-[800px] w-[800px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.1) 0%, rgba(0, 59, 226, 0.03) 53%, rgba(0, 59, 226, 0) 100%)",
        }}
      />
      {/* Mid-Right Blue Glow */}
      <div
        className="pointer-events-none absolute top-[60%] -right-[300px] h-[950px] w-[950px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= ROW 1: YOUR PATH TO PROFESSIONAL GROWTH ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text Block (Width ~574px) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:col-span-6"
          >
            <h2 className="font-heading xs:text-3xl text-2xl font-semibold tracking-[-0.01em] text-[#242528] sm:text-4xl md:text-[44px] md:leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-[160%] text-[#4B4C53] sm:mt-6 sm:text-base md:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Stats Row */}
            <div className="xs:gap-10 mt-8 flex flex-wrap items-end gap-6 sm:mt-10 sm:gap-14">
              <div className="flex flex-col items-start">
                <span className="font-heading xs:text-3xl text-2xl font-medium tracking-[-0.01em] text-[#003BE2] sm:text-[36px]">
                  12K
                </span>
                <span className="font-sans text-sm text-[#4B4C53] sm:text-base md:text-lg">
                  Students
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading xs:text-3xl text-2xl font-medium tracking-[-0.01em] text-[#003BE2] sm:text-[36px]">
                  70+
                </span>
                <span className="font-sans text-sm text-[#4B4C53] sm:text-base md:text-lg">
                  Courses
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading xs:text-3xl text-2xl font-medium tracking-[-0.01em] text-[#003BE2] sm:text-[36px]">
                  16
                </span>
                <span className="font-sans text-sm text-[#4B4C53] sm:text-base md:text-lg">
                  Creators
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center lg:col-span-6"
          >
            <div className="relative h-[440px] w-full max-w-[620px] sm:h-[580px] lg:h-[600px]">
              {/* Lime 3D Coil Behind Student (Top-Right) */}
              <FloatingShape
                src="/assets/images/shape-helix-right-lime.png"
                alt="3D lime helix"
                width={180}
                height={220}
                className="pointer-events-none absolute top-35 right-1 z-40 w-28 sm:top-28 sm:right-2 sm:w-36"
                imageClassName="h-auto w-full object-contain"
                floatY={-8}
                floatRotate={2}
                duration={6}
              />

              {/* Background CourseCard (Top-Left) */}
              <div className="xs:w-[260px] absolute top-2 left-0 z-10 w-full drop-shadow-xl sm:top-4 sm:left-0 sm:w-[300px] md:w-[330px]">
                <CourseCard course={figmaCourse} />
              </div>

              {/* Foreground Student Holding Laptop (Enlarged Hero Figure) */}
              <div className="xs:w-[320px] pointer-events-none absolute -right-7 bottom-0 z-20 w-full sm:-right-4 sm:w-[440px] md:-right-6 md:w-[490px] lg:w-[530px]">
                <Image
                  src="/assets/images/about-instructor-1.png"
                  alt="Student with laptop and headphones"
                  width={600}
                  height={560}
                  className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* Floating Learning Progress Badge (Overlapping student arm/laptop) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute bottom-12 left-0 z-10 w-[190px] sm:right-2 sm:bottom-64 sm:w-[220px] md:left-105 md:z-30 lg:left-55"
              >
                <LearningProgressBadge progress={55} size="sm" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= ROW 2: CREATE & MANAGE COURSES EASILY ================= */}
        <div className="mt-8 grid grid-cols-1 items-center gap-12 sm:mt-20 md:mt-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Visual Stage (Instructor + Badges) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 flex items-center justify-center lg:order-1 lg:col-span-6"
          >
            <div className="relative h-[400px] w-full max-w-[580px] sm:h-[600px] lg:h-[640px]">
              {/* Lime 3D Coil Behind Instructor (Mid-Right) */}
              <FloatingShape
                src="/assets/images/shape-helix-full-left-lime.png"
                alt="3D lime helix"
                width={180}
                height={220}
                className="pointer-events-none absolute top-50 right-0 z-40 w-28 sm:top-44 sm:right-24 sm:w-36 lg:top-55 lg:right-10"
                imageClassName="h-auto w-full object-contain"
                floatY={8}
                floatRotate={-2}
                duration={5.5}
              />

              {/* Total Revenue Blue Badge (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="xs:left-6 xs:w-[190px] xs:p-4 absolute top-4 right-1 z-20 w-[170px] rounded-[16px] bg-[#003BE2] p-3 text-white shadow-[0_16px_32px_rgba(0,59,226,0.25)] sm:top-12 sm:left-8 sm:w-[220px]"
              >
                <div>
                  <p className="font-sans text-xs font-medium text-[#F5F5F6] sm:text-sm">
                    Total Revenue
                  </p>
                  <p className="font-sans text-[10px] text-[#F5F5F6]/80">July 1-28</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-heading xs:text-xl text-lg font-semibold tracking-[-0.01em] text-[#F5F5F6] sm:text-2xl">
                    $120.29
                  </span>
                  <span className="rounded-full bg-[#CBFC01] px-2 py-0.5 font-sans text-[10px] font-medium text-[#242528]">
                    +12$
                  </span>
                </div>
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-white/30">
                  <div className="h-full w-[56%] rounded-full bg-[#D4FB20]" />
                </div>
              </motion.div>

              {/* Year to Date Blue Badge (Mid-Left) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="xs:left-6 xs:w-[130px] xs:p-3.5 absolute top-30 left-1 z-20 w-[120px] rounded-[16px] bg-[#003BE2] p-3 text-white shadow-[0_16px_32px_rgba(0,59,226,0.25)] sm:top-48 sm:left-8 sm:w-[134px]"
              >
                <p className="font-sans text-xs font-medium text-[#F5F5F6] sm:text-sm">
                  Year to Date
                </p>
                <p className="font-sans text-[10px] text-[#F5F5F6]/80">2023</p>
                <p className="font-heading xs:text-base mt-1 text-sm font-semibold tracking-[-0.01em] text-[#F5F5F6] sm:text-lg">
                  $1,200.38
                </p>
                <div className="mt-1.5 inline-block rounded-full bg-[#CBFC01] px-2 py-0.5 font-sans text-[10px] font-medium text-[#242528]">
                  +12$
                </div>
              </motion.div>

              {/* Center Instructor Woman (Enlarged Hero Figure) */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-2 z-20 flex justify-center sm:left-10">
                <Image
                  src="/assets/images/about-instructor.png"
                  alt="Instructor creator holding tablet"
                  width={520}
                  height={710}
                  className="xs:w-[310px] h-auto max-h-[480px] w-[270px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)] sm:max-h-[600px] sm:w-[450px] lg:max-h-[640px] lg:w-[480px]"
                />
              </div>

              {/* Happy Students Floating Badge (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute right-0 bottom-6 z-30 sm:right-2 sm:bottom-38"
              >
                <HappyStudentsBadge layout="stacked" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex flex-col items-start lg:order-2 lg:col-span-6"
          >
            <h2 className="font-heading xs:text-3xl text-2xl font-semibold tracking-[-0.01em] text-[#242528] sm:text-4xl md:text-[44px] md:leading-[1.2]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm leading-[160%] font-medium text-[#242528] sm:mt-6 sm:text-base sm:font-bold md:text-lg">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Benefit Checkmarks */}
            <ul className="mt-8 flex flex-col gap-4">
              {INSTRUCTOR_BENEFITS.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-base font-medium text-[#242528] sm:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
