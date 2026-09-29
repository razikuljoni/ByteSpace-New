export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  iconName: "design" | "development" | "it-software" | "business" | "marketing" | "photography";
  href?: string;
}
