"use client";

import Image from "next/image";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <article
      className={`flex flex-col justify-start rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:p-8 ${className}`}
    >
      {/* Avatar */}
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16">
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Author Details */}
      <div className="mt-5">
        <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-[#242528] sm:text-xl">
          {testimonial.name}
        </h3>
        <p className="font-sans text-xs font-medium text-[#003BE2] sm:text-sm">
          {testimonial.role}
        </p>
      </div>

      {/* Quote */}
      <p className="mt-5 font-sans text-xs leading-[170%] text-[#4B4C53] sm:text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}
