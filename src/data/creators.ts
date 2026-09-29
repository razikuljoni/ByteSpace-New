import { COURSES } from "./courses";
import { Course } from "@/types/course";

export interface CreatorProfile {
  id: string;
  name: string;
  badge: string;
  role: string;
  avatar: string;
  bioParagraphs: string[];
  productsCount: number;
  followersCount: number;
}

export const CREATORS_MAP: Record<string, CreatorProfile> = {
  "purepearl-studio": {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    badge: "Creator",
    role: "Passionate UI/UX, Web designer",
    avatar: "/assets/images/about-instructor.png",
    bioParagraphs: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    productsCount: 3,
    followersCount: 12,
  },
  "atelier-studio": {
    id: "atelier-studio",
    name: "Atelier Studio",
    badge: "Creator",
    role: "Master Illustrator & Fine Artist",
    avatar: "/assets/images/about-instructor-1.png",
    bioParagraphs: [
      "Welcome to Atelier Studio. We specialize in contemporary watercolors, expressive acrylic paintings, and digital drawing fundamentals for artists worldwide.",
      "Explore our hands-on workshops and masterclasses designed to build your fine art techniques and unlock your creative signature.",
    ],
    productsCount: 2,
    followersCount: 48,
  },
  "soundcraft-lab": {
    id: "soundcraft-lab",
    name: "Soundcraft Lab",
    badge: "Creator",
    role: "Audio Engineer & Music Producer",
    avatar: "/assets/images/about-ellipse-8.png",
    bioParagraphs: [
      "Soundcraft Lab is an independent audio production collective focused on synthesizer sound design, electronic beatmaking, and modern mixing & mastering workflows.",
      "Learn cutting-edge production techniques in Ableton, Logic Pro, and modular synthesis with comprehensive stems and downloadable project files.",
    ],
    productsCount: 2,
    followersCount: 89,
  },
  "devcraft-academy": {
    id: "devcraft-academy",
    name: "Devcraft Academy",
    badge: "Creator",
    role: "Full-Stack Architect & Engineering Lead",
    avatar: "/assets/images/about-ellipse-9.png",
    bioParagraphs: [
      "Devcraft Academy empowers engineers and product builders to construct scalable modern web applications, distributed systems, and real-time data pipelines.",
      "Gain deep practical insight into TypeScript, Next.js, Cloud architecture, and database design through real-world capstone builds.",
    ],
    productsCount: 2,
    followersCount: 140,
  },
  "hypergrowth-co": {
    id: "hypergrowth-co",
    name: "Hypergrowth Co",
    badge: "Creator",
    role: "Startup Advisor & Growth Strategist",
    avatar: "/assets/images/about-ellipse-10.png",
    bioParagraphs: [
      "Hypergrowth Co provides tactical playbooks for founders, product leads, and growth marketers scaling from zero to commercial traction.",
      "Explore performance marketing, customer acquisition channels, unit economics, and sustainable productivity frameworks.",
    ],
    productsCount: 4,
    followersCount: 95,
  },
  pixelmotion: {
    id: "pixelmotion",
    name: "PixelMotion",
    badge: "Creator",
    role: "Senior Motion Designer & 3D Animator",
    avatar: "/assets/images/about-ellipse-11.png",
    bioParagraphs: [
      "PixelMotion crafts dynamic motion graphics, brand identities, and kinetic typography for top brands and entertainment studios.",
      "Master After Effects, keyframe graph editors, and 3D camera staging through step-by-step commercial design briefs.",
    ],
    productsCount: 1,
    followersCount: 64,
  },
};

function formatAuthorName(raw: string): string {
  return raw
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCreatorSlug(author: string): string {
  if (!author) return "purepearl-studio";
  return author
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");
}

export function getAllCreatorSlugs(): string[] {
  const authorSlugs = COURSES.map((c) => getCreatorSlug(c.author));
  authorSlugs.push("purepearl-studio");
  return Array.from(new Set(authorSlugs));
}

export function getCreatorBySlug(slug: string): CreatorProfile {
  const normalizedSlug = decodeURIComponent(slug)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");

  if (CREATORS_MAP[normalizedSlug]) {
    return CREATORS_MAP[normalizedSlug];
  }

  // Find author in COURSES
  const matchedCourse = COURSES.find((c) => {
    const authorSlug = c.author
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");
    return authorSlug === normalizedSlug || c.author.toLowerCase() === slug.toLowerCase();
  });

  if (matchedCourse) {
    const formattedName = formatAuthorName(matchedCourse.author);
    const creatorCourses = COURSES.filter((c) => c.author === matchedCourse.author);

    return {
      id: normalizedSlug,
      name: formattedName,
      badge: "Creator",
      role: `Specialist in ${matchedCourse.category}`,
      avatar: "/assets/images/about-instructor.png",
      bioParagraphs: [
        `Welcome to the creative world of ${formattedName}. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!`,
        "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
      ],
      productsCount: creatorCourses.length,
      followersCount: 12,
    };
  }

  // Fallback to PurePearl Studio
  return CREATORS_MAP["purepearl-studio"];
}

export function getCoursesByCreator(slugOrAuthor: string): Course[] {
  const normalized = decodeURIComponent(slugOrAuthor)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");

  const matchingCourses = COURSES.filter((c) => {
    const authorSlug = c.author
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");
    return authorSlug === normalized || c.author.toLowerCase() === slugOrAuthor.toLowerCase();
  });

  if (matchingCourses.length > 0) {
    return matchingCourses;
  }

  // Default to courses by purepearl studio
  return COURSES.filter((c) => c.author === "purepearl studio");
}
