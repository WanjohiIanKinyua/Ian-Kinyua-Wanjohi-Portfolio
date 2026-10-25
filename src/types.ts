export interface Profile {
  name: string;
  shortName: string;
  role: string;
  lead: string;
  location: string;
  email: string;
  emailHref: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  resume: string;
  resumeDownloadName: string;
  portrait: string;
  logo: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Assignment {
  title: string;
  client: string;
  location: string;
  period: string;
  points: string[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  mode?: string;
  points: string[];
  assignments?: Assignment[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export type ProjectCategory = "web" | "data" | "mobile";

export type Accent =
  | "indigo"
  | "rose"
  | "violet"
  | "teal"
  | "orange"
  | "green"
  | "amber"
  | "lime"
  | "sky"
  | "blue";

export interface Project {
  title: string;
  label: string;
  category: ProjectCategory;
  accent: Accent;
  description: string;
  stack: string[];
  live?: string;
  source?: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  honours?: string;
}

export interface CertificationGroup {
  issuer: string;
  items: string[];
}

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}
