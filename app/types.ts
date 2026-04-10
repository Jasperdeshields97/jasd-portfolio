export interface AboutData {
  name: string;
  handle: string;
  tagline: string;
  bio: string;
  currentFocus: string;
  location: string;
  openTo: string[];
  social: {
    github?: string;
    twitter?: string;
  };
  updatedAt: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  status: "live" | "review" | "building";
  statusLabel: string;
  tagline: string;
  description: string;
  insight: string;
  problem: string;
  whatWasBuilt: string;
  stack: string[];
  metrics: Record<string, string | number>;
  links: Record<string, string | null>;
  color: string;
  featured: boolean;
  order: number;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  project: string;
  type: "ship" | "milestone" | "start";
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}
