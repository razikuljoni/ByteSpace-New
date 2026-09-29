import { COURSES } from "./courses";
import { getCreatorBySlug, getCreatorSlug } from "./creators";

export interface PreviewLesson {
  number: string;
  title: string;
  duration: string;
}

export interface CourseInclusion {
  icon: "resources" | "video" | "certificate" | "consultation";
  text: string;
}

export interface CourseModuleItem {
  moduleNumber: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  avatar: string;
  timeAgo: string;
  rating: number;
  content: string;
}

export interface RatingBreakdownItem {
  stars: number;
  count: number;
  percentage: number;
}

export interface CourseDetailData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  level: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  pricePeriod: string;
  lessonsTotal: number;
  totalDuration: string;
  videoThumbnail: string;
  previewLessons: PreviewLesson[];
  moreVideosCount: number;
  inclusions: CourseInclusion[];
  descriptionParagraphs: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
  modules?: CourseModuleItem[];
  learningProgress?: number;
  reviews?: ReviewItem[];
  ratingsBreakdown?: RatingBreakdownItem[];
}

export const DEFAULT_MODULES: CourseModuleItem[] = [
  {
    moduleNumber: "Module 1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
  },
  {
    moduleNumber: "Module 2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
  },
  {
    moduleNumber: "Module 4",
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
  },
  {
    moduleNumber: "Module 5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
  },
  {
    moduleNumber: "Module 6",
    title: "Project Showcase and Critique",
    description:
      "Reflect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
  },
  {
    moduleNumber: "Module 7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    author: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/assets/images/about-ellipse-8.png",
    timeAgo: "a year ago",
    rating: 5,
    content:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were incredibly practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "review-2",
    author: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/assets/images/about-ellipse-9.png",
    timeAgo: "a year ago",
    rating: 5,
    content:
      "This course revolutionized my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "review-3",
    author: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/assets/images/about-ellipse-10.png",
    timeAgo: "a year ago",
    rating: 5,
    content:
      "The project showcase and critique modules created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "review-4",
    author: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/assets/images/about-ellipse-11.png",
    timeAgo: "a year ago",
    rating: 5,
    content:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscapes, and the engaging content kept me motivated throughout.",
  },
];

export const DEFAULT_RATINGS_BREAKDOWN: RatingBreakdownItem[] = [
  { stars: 5, count: 750, percentage: 75 },
  { stars: 4, count: 150, percentage: 22 },
  { stars: 3, count: 51, percentage: 10 },
  { stars: 2, count: 10, percentage: 4 },
  { stars: 1, count: 14, percentage: 6 },
];

export const COURSE_DETAILS_MAP: Record<string, CourseDetailData> = {
  "build-digital-asset": {
    id: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    author: "purepearl studio",
    authorRole: "Professional Creator",
    authorAvatar: "/assets/images/about-instructor.png",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: 172,
    studentsCount: 199,
    price: 25,
    pricePeriod: "lifetime",
    lessonsTotal: 112,
    totalDuration: "24 hours",
    videoThumbnail: "/assets/images/hero-student.png",
    previewLessons: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreVideosCount: 99,
    inclusions: [
      { icon: "resources", text: "Learning Resources" },
      { icon: "video", text: "Quality Lesson Videos" },
      { icon: "certificate", text: "Certificate of Completion" },
      { icon: "consultation", text: "Private Consultation" },
    ],
    descriptionParagraphs: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Assets: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you'll establish a solid foundation by immersing yourself in key foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    learningProgress: 55,
    modules: DEFAULT_MODULES,
    reviews: DEFAULT_REVIEWS,
    ratingsBreakdown: DEFAULT_RATINGS_BREAKDOWN,
  },
  "course-1": {
    id: "course-1",
    title: "Learn Figma from Basic: Modern UI/UX Masterclass",
    subtitle: "From Zero to Hero in Interface Design and Interactive Prototyping",
    author: "purepearl studio",
    authorRole: "Principal UI/UX Designer",
    authorAvatar: "/assets/images/about-instructor-1.png",
    level: "Beginner",
    rating: 4.9,
    reviewsCount: 245,
    studentsCount: 380,
    price: 25,
    pricePeriod: "lifetime",
    lessonsTotal: 78,
    totalDuration: "18 hours",
    videoThumbnail:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",
    previewLessons: [
      {
        number: "01",
        title: "Figma Interface & Canvas Architecture",
        duration: "14 mins",
      },
      {
        number: "02",
        title: "Auto-Layout & Responsive Constraints",
        duration: "24 mins",
      },
      {
        number: "03",
        title: "Design Tokens & Variable Typography",
        duration: "19 mins",
      },
    ],
    moreVideosCount: 75,
    inclusions: [
      { icon: "resources", text: "Complete UI Kit & Figma Templates" },
      { icon: "video", text: "HD 4K Video Tutorials with Subtitles" },
      { icon: "certificate", text: "Certified Figma Specialist Credential" },
      { icon: "consultation", text: "Weekly Portfolio Review Sessions" },
    ],
    descriptionParagraphs: [
      "Figma has revolutionized how product teams design and prototype modern software. In this masterclass, you will embark on an end-to-end journey from learning the fundamentals of vector networks to crafting production-grade design systems with Auto-Layout, Component Properties, and dynamic variables.",
      "Explore real-world client workflows used by top design agencies. You will construct responsive desktop and mobile web experiences, organize atomic design libraries, and conduct usability testing using interactive smart-animate prototypes.",
      "By completing hands-on project briefs, you will build an industry-ready design portfolio that stands out to recruiters and founders worldwide.",
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    ],
    keyPoints: [
      "Core Vector Network & Boolean Operations",
      "Mastering Auto-Layout 5.0 and Component Sets",
      "Building Reusable Design Systems with Tokens",
      "Smart Animate & Interactive Micro-Interactions",
      "Handoff Best Practices for Developers",
      "Design Systems Maintenance & Version Control",
      "User Journey Mapping and Wireframing",
      "Full Portfolio Case Study Presentation",
    ],
  },
  "course-3": {
    id: "course-3",
    title: "The Power of Big Data: Analytics & Modern Insights",
    subtitle: "Harness Data Visualization, Pipelines, and Machine Learning Fundamentals",
    author: "devcraft academy",
    authorRole: "Full-Stack Architect & Engineering Lead",
    authorAvatar: "/assets/images/about-ellipse-9.png",
    level: "Advanced",
    rating: 4.8,
    reviewsCount: 156,
    studentsCount: 220,
    price: 35,
    pricePeriod: "lifetime",
    lessonsTotal: 96,
    totalDuration: "28 hours",
    videoThumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    previewLessons: [
      {
        number: "01",
        title: "Big Data Architectures & Cloud Storage",
        duration: "18 mins",
      },
      {
        number: "02",
        title: "SQL & Distributed Query Optimization",
        duration: "26 mins",
      },
      {
        number: "03",
        title: "Visualizing Real-Time Metrics with Dashboards",
        duration: "22 mins",
      },
    ],
    moreVideosCount: 93,
    inclusions: [
      { icon: "resources", text: "Jupyter Notebooks & Public Datasets" },
      { icon: "video", text: "Step-by-step Video Walkthroughs" },
      { icon: "certificate", text: "Accredited Data Analytics Certificate" },
      { icon: "consultation", text: "1-on-1 Career Strategy Consultation" },
    ],
    descriptionParagraphs: [
      "Data is the world's most valuable asset when parsed with precision. This comprehensive course prepares you to decipher high-volume data streams, build scalable analytical pipelines, and tell compelling stories through dashboards.",
      "Work with real-world enterprise datasets from finance, technology, and health sectors. You'll master Python data science toolkits, write efficient SQL aggregations, and design dashboards that facilitate executive decisions.",
      "Advance into predictive modeling and statistical inference, giving you the edge needed to lead data-driven initiatives in modern organizations.",
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    ],
    keyPoints: [
      "Distributed Cloud Pipelines & Data Warehouses",
      "Advanced SQL Queries, Window Functions & CTEs",
      "Python Pandas, NumPy, and Data Wrangling",
      "Interactive Dashboard Architecture",
      "Predictive Analytics & Statistical Models",
      "Data Storytelling for Business Leaders",
      "ETL Pipeline Orchestration",
      "End-to-End Enterprise Analytics Capstone",
    ],
  },
  "course-webdev-1": {
    id: "course-webdev-1",
    title: "Next.js & Modern Web Dev: Fullstack Mastery",
    subtitle: "Ship Production Ready Fullstack Applications with React 19 & Tailwind",
    author: "devcraft academy",
    authorRole: "Senior Fullstack Architect",
    authorAvatar: "/assets/images/about-ellipse-9.png",
    level: "Intermediate",
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: 450,
    price: 39,
    pricePeriod: "lifetime",
    lessonsTotal: 84,
    totalDuration: "22 hours",
    videoThumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    previewLessons: [
      {
        number: "01",
        title: "Server Components & Turbopack Core",
        duration: "16 mins",
      },
      {
        number: "02",
        title: "Database Modeling with Prisma & Postgres",
        duration: "25 mins",
      },
      {
        number: "03",
        title: "Authentication, Sessions, and Edge Middleware",
        duration: "20 mins",
      },
    ],
    moreVideosCount: 81,
    inclusions: [
      { icon: "resources", text: "Production GitHub Starter Boilerplate" },
      { icon: "video", text: "Full HD Coding Sessions with Source Diffs" },
      { icon: "certificate", text: "Verified Fullstack Developer Certificate" },
      { icon: "consultation", text: "Code Review by Staff Engineers" },
    ],
    descriptionParagraphs: [
      "Master the latest standards in modern web application engineering. Learn how to architect, develop, and deploy lightning-fast applications with Next.js App Router, Server Actions, TypeScript, and modern CSS.",
      "Understand the critical differences between client and server execution environments. Build authentication systems, connect with relational databases, and optimize Core Web Vitals to deliver flawless user experiences.",
      "Deploy your projects to modern edge infrastructure with automated CI/CD pipelines, database migrations, and telemetry monitoring.",
    ],
    sneakPeakImages: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    ],
    keyPoints: [
      "Next.js App Router Architecture & Server Actions",
      "Zero-Latency State Management & Optimistic UI",
      "PostgreSQL Integration with Prisma & Drizzle",
      "Secure Auth with OAuth & JWT Sessions",
      "Tailwind CSS Layout Mastery & Animations",
      "Automated Testing with Vitest and Playwright",
      "Edge Functions, ISR, and Cache Invalidation",
      "Deploying Scalable SaaS Infrastructure",
    ],
  },
};

// Aliases
COURSE_DETAILS_MAP["course-2"] = {
  ...COURSE_DETAILS_MAP["build-digital-asset"],
  id: "course-2",
};

/**
 * Returns specific course details by ID, or derives realistic course detail data
 * based on the registered courses in COURSES.
 */
export function getCourseDetailById(id: string): CourseDetailData {
  if (COURSE_DETAILS_MAP[id]) {
    return COURSE_DETAILS_MAP[id];
  }

  // Look for course in COURSES array
  const matchedCourse = COURSES.find(
    (c) => c.id === id || c.id.replace(/-p\d+-\d+$/, "") === id || id.startsWith(c.id),
  );

  if (matchedCourse) {
    const creator = getCreatorBySlug(getCreatorSlug(matchedCourse.author));
    return {
      id: matchedCourse.id,
      title: matchedCourse.title,
      subtitle: `Master ${matchedCourse.category} with step-by-step real world industry guidance`,
      author: matchedCourse.author,
      authorRole: creator.role,
      authorAvatar: creator.avatar,
      level: matchedCourse.level,
      rating: matchedCourse.rating,
      reviewsCount: matchedCourse.commentsCount * 3 + 12,
      studentsCount: parseInt(matchedCourse.studentCount) * 4 || 180,
      price: matchedCourse.price,
      pricePeriod: matchedCourse.pricePeriod || "lifetime",
      lessonsTotal: matchedCourse.lessonsCount * 4 || 68,
      totalDuration: matchedCourse.duration || "14 hours",
      videoThumbnail: matchedCourse.imageUrl || "/assets/images/hero-student.png",
      previewLessons: [
        {
          number: "01",
          title: `Introduction to ${matchedCourse.category}`,
          duration: "14 mins",
        },
        {
          number: "02",
          title: "Core Frameworks & Practical Fundamentals",
          duration: "22 mins",
        },
        {
          number: "03",
          title: "Advanced Execution & Real-World Projects",
          duration: "18 mins",
        },
      ],
      moreVideosCount: Math.max(12, matchedCourse.lessonsCount * 3),
      inclusions: [
        { icon: "resources", text: "Downloadable Practice Worksheets" },
        { icon: "video", text: "Full HD Video Lessons" },
        { icon: "certificate", text: "Official Certificate of Completion" },
        { icon: "consultation", text: "Community & Peer Feedback" },
      ],
      descriptionParagraphs: [
        `Welcome to '${matchedCourse.title}'. This comprehensive program is specifically designed to take you from core principles to high-level mastery in ${matchedCourse.category}.`,
        `Led by industry veteran ${matchedCourse.author}, you will gain deep tactical skills, explore hands-on workflows, and complete practical assignments that prepare you for commercial success.`,
        "Equip yourself with the tools, strategies, and portfolio pieces needed to excel in today's competitive creative and technical landscape.",
      ],
      sneakPeakImages: [
        matchedCourse.imageUrl,
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
      ],
      keyPoints: [
        "Foundational Mastery & Tool Overview",
        "Systematic Step-by-Step Methodology",
        "Industry Best Practices & Common Pitfalls",
        "Hands-on Practical Exercises",
        "Critique, Iteration, and Refinement",
        "Exporting and Distribution Channels",
        "Monetization & Client Acquisition",
        "Final Capstone Showcase Project",
      ],
      learningProgress: 55,
      modules: DEFAULT_MODULES,
      reviews: DEFAULT_REVIEWS,
      ratingsBreakdown: DEFAULT_RATINGS_BREAKDOWN,
    };
  }

  // Fallback to sample course detail
  return COURSE_DETAILS_MAP["build-digital-asset"];
}
