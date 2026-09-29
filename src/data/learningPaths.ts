import { LearningPath } from "@/types/learningPath";

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "path-design",
    title: "Design",
    slug: "design",
    iconName: "design",
    href: "/courses?category=design",
  },
  {
    id: "path-development",
    title: "Development",
    slug: "development",
    iconName: "development",
    href: "/courses?category=web-development",
  },
  {
    id: "path-it-software",
    title: "IT & Software",
    slug: "it-software",
    iconName: "it-software",
    href: "/courses?category=data-science",
  },
  {
    id: "path-business",
    title: "Business",
    slug: "business",
    iconName: "business",
    href: "/courses?category=freelance-entrepreneurship",
  },
  {
    id: "path-marketing",
    title: "Marketing",
    slug: "marketing",
    iconName: "marketing",
    href: "/courses?category=marketing",
  },
  {
    id: "path-photography",
    title: "Photography",
    slug: "photography",
    iconName: "photography",
    href: "/courses?category=photography",
  },
];
