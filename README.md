# ByteSpace — Frontend Engineering Assignment

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bytespace--peach.vercel.app-003BE2?style=for-the-badge&logo=vercel&logoColor=white)](https://bytespace-peach.vercel.app/)
[![Next.js 16](<https://img.shields.io/badge/Next.js-16.3.6%20(App%20Router)-black?style=for-the-badge&logo=next.js&logoColor=white>)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📌 Project Overview

This repository contains the complete frontend implementation of **ByteSpace**, an online learning marketplace and creator storefront. The project is built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, engineered for high performance, smooth micro-interactions, Core Web Vitals excellence, and fluid responsiveness across all screen sizes.

- **Live URL**: [https://bytespace-peach.vercel.app/](https://bytespace-peach.vercel.app/)
- **Repository**: [https://github.com/razikuljoni/bytespace](https://github.com/razikuljoni/bytespace)

---

## 📋 Implemented Pages & Route Mapping

| Route                   | Page                           | Key Features & Implementation                                                                                                                         |
| ----------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                     | **Home**                       | Hero with 3D floating shapes, partner logos, learning paths, interactive featured courses, 2-stage about section, community testimonials, creator CTA |
| `/courses`              | **Course Catalog**             | Live search, multi-filter dropdowns (Level & Category), horizontal category chips with scroll suppression, pagination, empty states                   |
| `/courses/[id]`         | **Course Detail (About)**      | Embedded video preview, overview metrics, key points, curriculum sneak peek gallery, sticky enrollment sidebar                                        |
| `/courses/[id]/lessons` | **Course Detail (Curriculum)** | Module breakdown, video lesson syllabus list, interactive progress tracking card                                                                      |
| `/courses/[id]/reviews` | **Course Detail (Reviews)**    | Ratings overview, star rating breakdown bars, interactive rating filter pills, reviewer testimonials                                                  |
| `/creators`             | **Creators Index**             | Creator directory entry page featuring top studio profile                                                                                             |
| `/creators/[slug]`      | **Creator Storefront**         | Profile avatar, bio, follower count, interactive Follow/Following toggle, creator courses view                                                        |
| `/login`                | **Sign In**                    | Responsive auth card, social login buttons, fluid mobile layout                                                                                       |
| `/register`             | **Registration**               | Account creation with role support (`?role=creator` or student)                                                                                       |
| `/search`               | **Search**                     | Query alias seamlessly redirecting to filtered catalog                                                                                                |
| `/*`                    | **404 Not Found**              | Custom branded error page with blueprint grid, gradient 404 header, and home recovery CTA                                                             |

---

## 🎯 Technical & Architecture Highlights

### 1. Fluid Responsive Design (320px to 4K)

- **Zero Horizontal Overflow**: `html, body { overflow-x: hidden; }` prevents layout shifts and sideways drift caused by floating 3D perimeter elements.
- **Mobile First**: Handcrafted responsive breakpoints (`xs: 375px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- **Adaptive Visual Hierarchy**:
  - Heavy 460px visual compositions in authentication views are gracefully hidden on mobile (`hidden lg:block`), bringing input fields immediately above the fold.
  - Floating 3D shapes scale down or hide selectively on small screens to eliminate text overlap.
  - Category filter pills support touch-friendly horizontal swipe with `.no-scrollbar` cross-browser support.

### 2. Performance & Core Web Vitals (CWV)

- **Static Site Generation (SSG)**: 100% of routes (82 pre-rendered pages) are statically generated at build time (`next build`), enabling instant edge delivery.
- **LCP Optimization**: Above-the-fold Hero images are prioritized with exact `sizes` attribute mappings; below-the-fold assets use native lazy loading.
- **CLS Elimination (CLS = 0)**: Fixed aspect-ratio wrappers (`aspect-[341/195]`, `aspect-video`) prevent layout shifting as images resolve.
- **Asset Negotiation**: Configured `next.config.ts` for automated `image/avif` and `image/webp` next-gen image serving with long-term cache headers.
- **Typography Preconnect**: Early connection to `https://api.fontshare.com` and `https://cdn.fontshare.com` ensures zero FOUT (Flash of Unstyled Text) for the Satoshi typeface.

### 3. SEO & OpenGraph Meta

- **Dynamic OG Image**: Built with Next.js `@vercel/og` (`/opengraph-image`) creating a high-resolution 1200x630 social sharing card.
- **Dynamic Route Metadata**: Individual course detail pages and creator profiles dynamically output contextual OpenGraph and Twitter cards based on course titles, instructors, and thumbnails.
- **Valid PWA Icons**: Full favicon suite (`favicon.ico`, `favicon-16x16`, `favicon-32x32`, `apple-touch-icon`, `site.webmanifest`) configured in `layout.tsx`.

---

## 🛠️ Tech Stack & Tooling

- **Framework**: Next.js 16.3.6 (App Router, Turbopack)
- **UI Library**: React 19.3.0
- **Language**: TypeScript 5.9.3 (Strict mode, zero `any`)
- **Styling**: Tailwind CSS v4.3.3 + CSS Variables
- **Animations**: Framer Motion 13.4.4
- **Icons**: Lucide React 1.48.0
- **Linter & Formatter**: ESLint 9 (Flat config), Prettier with `prettier-plugin-tailwindcss`

---

## 📂 Project Structure

```text
src/
├── app/                              # Next.js App Router
│   ├── courses/
│   │   ├── [id]/
│   │   │   ├── lessons/page.tsx      # Course curriculum syllabus
│   │   │   ├── reviews/page.tsx      # Course ratings & reviews
│   │   │   └── page.tsx              # Course overview (About)
│   │   └── page.tsx                  # Searchable course catalog
│   ├── creators/
│   │   ├── [slug]/page.tsx           # Dynamic creator profile
│   │   └── page.tsx                  # Creators directory index
│   ├── login/page.tsx                # Authentication sign in
│   ├── register/page.tsx             # Authentication sign up
│   ├── search/page.tsx               # Query search alias
│   ├── globals.css                   # Theme tokens, blueprint grid, scrollbar utils
│   ├── layout.tsx                    # Root layout, CDN preconnects & SEO metadata
│   ├── not-found.tsx                 # Custom 404 page
│   ├── opengraph-image.tsx           # Dynamic 1200x630 social card generator
│   └── page.tsx                      # Homepage
├── components/
│   ├── auth/                         # AuthCard, AuthLayout, AuthVisualComposition
│   ├── courses/                      # CourseCatalog, CourseFilters, CourseSearchHero
│   │   └── details/                  # Hero, Layout, Sidebar, Tabs, Content sections
│   ├── creators/                     # CreatorHero, CreatorCoursesView
│   ├── home/                         # Hero, PartnerLogos, LearningPaths, About, etc.
│   ├── layout/                       # Responsive Navbar, Footer
│   └── ui/                           # CourseCard, Badges, StarRating, FloatingShape, etc.
├── data/                             # Mock data stores (courses, creators, paths, reviews)
│   ├── courseDetailData.ts
│   ├── courses.ts
│   ├── creators.ts
│   ├── learningPaths.ts
│   └── testimonials.ts
└── types/                            # Type contracts and interfaces
    ├── course.ts
    ├── learningPath.ts
    └── testimonial.ts
```

---

## 🚀 Local Development & Evaluation

### Prerequisites

- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### Setup Instructions

```bash
# 1. Clone repository
git clone https://github.com/razikuljoni/bytespace.git
cd bytespace

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application locally.

---

## 🧪 Verification & Quality Checks

Run the verification scripts to test the codebase:

```bash
# Type check TypeScript across all files
npm run typecheck

# Lint codebase with ESLint
npm run lint

# Check code formatting with Prettier
npm run format:check

# Produce optimized static production build
npm run build
```
