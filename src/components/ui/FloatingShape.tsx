"use client";

import React from "react";
import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";

export interface FloatingShapeProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  floatY?: number;
  floatRotate?: number;
  duration?: number;
  floatDelay?: number;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
}

export function FloatingShape({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "h-auto w-full object-contain drop-shadow-xl",
  priority = false,
  floatY = -8,
  floatRotate = 0,
  duration = 6,
  floatDelay = 0,
  initial,
  animate,
  transition,
}: FloatingShapeProps) {
  const innerMotion = (
    <motion.div
      animate={{
        y: floatY !== 0 ? [0, floatY, 0] : undefined,
        rotate: floatRotate !== 0 ? [0, floatRotate, 0] : undefined,
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={imageClassName}
      />
    </motion.div>
  );

  if (initial) {
    return (
      <motion.div initial={initial} animate={animate} transition={transition} className={className}>
        {innerMotion}
      </motion.div>
    );
  }

  return <div className={className}>{innerMotion}</div>;
}
