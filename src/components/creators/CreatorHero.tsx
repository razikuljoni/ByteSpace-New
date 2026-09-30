"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { BlueGridBackground } from "@/components/ui/BlueGridBackground";
import { CreatorProfile } from "@/data/creators";

interface CreatorHeroProps {
  creator: CreatorProfile;
  totalCourses: number;
}

export function CreatorHero({ creator, totalCourses }: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowers((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <BlueGridBackground className="text-white">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 3. Hero Creator Info Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-24">
        {/* Creator Identity: Avatar + Name + Badge + Role */}
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Avatar with warm squircle frame */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#FFB4A2]/40 p-1 shadow-md ring-2 ring-white/20 sm:h-24 sm:w-24 sm:rounded-3xl">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              priority
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover object-top"
            />
          </div>

          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {creator.name}
              </h1>
              <span className="inline-flex items-center rounded-full bg-[#CBFC01] px-2.5 py-0.5 font-sans text-xs font-semibold text-neutral-950 shadow-xs">
                {creator.badge}
              </span>
            </div>
            <p className="mt-1 font-sans text-xs text-white/80 sm:text-sm">{creator.role}</p>
          </div>
        </div>

        {/* Bio Paragraphs */}
        <div className="mt-6 max-w-3xl space-y-3 font-sans text-xs leading-relaxed text-white/90 sm:text-sm">
          {creator.bioParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Stats Pills & Follow Button Row */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 font-sans text-xs font-semibold text-neutral-950 shadow-xs sm:text-sm">
              {totalCourses || creator.productsCount} Products
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 font-sans text-xs font-semibold text-neutral-950 shadow-xs sm:text-sm">
              {followers} Followers
            </span>
          </div>

          <button
            type="button"
            onClick={handleFollowToggle}
            className={`inline-flex items-center justify-center rounded-full px-7 py-2 font-sans text-xs font-semibold shadow-md transition-all active:scale-95 sm:text-sm ${
              isFollowing
                ? "bg-white text-neutral-950 hover:bg-neutral-100"
                : "bg-[#CBFC01] text-neutral-950 hover:bg-[#CBFC01]/90"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </BlueGridBackground>
  );
}
