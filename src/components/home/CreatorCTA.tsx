"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlueGridBackground } from "@/components/ui/BlueGridBackground";

export function CreatorCTA() {
  return (
    <section className="relative w-full">
      <BlueGridBackground className="py-20 sm:py-28 lg:py-36">
        {/* ================= 3D PERIMETER SHAPES (FLUSH CROPPED ASSETS) ================= */}

        {/* 1. Top-Left Cropped Lime Helix */}
        <div className="pointer-events-none absolute -top-36 left-0 z-10 w-24 sm:w-36 md:w-44 lg:w-56">
          <Image
            src="/assets/images/cta-shape-helix-left-crop-lime.png"
            alt="Decorative 3D lime helix"
            width={240}
            height={300}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* 2. Mid-Left Small White Helix / Zigzag */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          className="pointer-events-none absolute -top-28 left-[11%] z-10 w-14 sm:left-[13%] sm:w-20 md:w-28 lg:left-[14%]"
        >
          <Image
            src="/assets/images/shape-helix-left-white.png"
            alt="Decorative white zigzag"
            width={180}
            height={200}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* 3. Bottom-Left White Cone */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute bottom-4 left-0 z-10 w-14 sm:bottom-6 sm:left-0 sm:w-20 md:w-28 lg:w-32"
        >
          <Image
            src="/assets/images/cta-shape-cone-white.png"
            alt="Decorative white cone"
            width={140}
            height={180}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* 4. Bottom-Left Cropped Lime Torus Ring */}
        <div className="pointer-events-none absolute -bottom-36 left-[4%] z-10 w-28 sm:left-[6%] sm:w-40 md:w-48 lg:w-56">
          <Image
            src="/assets/images/cta-shape-torus-crop-lime.png"
            alt="Decorative lime torus ring"
            width={240}
            height={240}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* 5. Top-Right Lime Pyramid */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.3 }}
          className="pointer-events-none absolute top-4 right-[11%] z-10 w-16 sm:-top-30 sm:right-[14%] sm:w-24 md:w-32 lg:right-[15%] lg:w-36"
        >
          <Image
            src="/assets/images/cta-shape-pyramid-lime.png"
            alt="Decorative lime pyramid"
            width={160}
            height={160}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 6. Top-Right Cropped White Cylinder */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.6 }}
          className="pointer-events-none absolute -top-14 right-0 z-10 w-24 sm:w-36 md:w-44 lg:w-56"
        >
          <Image
            src="/assets/images/cta-shape-cylinder-white.png"
            alt="Decorative white cylinder"
            width={240}
            height={320}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 7. Bottom-Right Cropped Lime Helix */}
        <div className="pointer-events-none absolute right-0 -bottom-36 z-10 w-24 sm:w-36 md:w-44 lg:w-56">
          <Image
            src="/assets/images/cta-shape-helix-right-crop-lime.png"
            alt="Decorative lime helix"
            width={240}
            height={300}
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* ================= CENTER CTA CONTENT ================= */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl md:leading-[1.18] lg:text-[52px]">
              Unlock Your Potential as a
              <br />
              Creator with ByteSpace
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-relaxed text-white/90 sm:text-base sm:leading-[160%] md:max-w-3xl">
              Experience the collaboration of numerous creators and an expanding selection of
              courses. Register now and become a part of a community comprising over 10,000 local
              and international creators. Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/creator/register"
                className="bg-accent hover:bg-accent/90 inline-flex items-center justify-center rounded-full px-8 py-3.5 font-sans text-sm font-medium text-neutral-950 shadow-lg transition-all active:scale-95 sm:text-base"
              >
                Join as Creator
              </Link>
            </div>
          </motion.div>
        </div>
      </BlueGridBackground>
    </section>
  );
}
