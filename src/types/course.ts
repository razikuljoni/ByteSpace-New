export interface Course {
  id: string;
  title: string;
  author: string;
  authorUrl?: string;
  rating: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced" | string;
  studentCount: string;
  studentAvatars: string[];
  price: number;
  pricePeriod?: string;
  imageUrl: string;
  category: string;
  featured?: boolean;
}
