// === Profile ===
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  email?: string;
  portfolio?: string;
}

export interface MetaInfo {
  siteTitle: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline?: string;
  social: SocialLinks;
  meta: MetaInfo;
}

// === Hero ===
export interface CTAButton {
  text: string;
  href: string;
  external?: boolean;
}

export interface HeroBackground {
  type: 'gradient' | 'image' | 'video' | 'particles' | 'solid';
  value: string;
}

export interface HeroData {
  greeting?: string;
  name: string;
  roles?: string[];
  description: string;
  image?: string;
  imageAlt?: string;
  cta: {
    primary?: CTAButton;
    secondary?: CTAButton;
  };
  background?: HeroBackground;
}

// === Capabilities (formerly About) ===
export interface CapabilityTool {
  name: string;
  icon: string;
}

export interface Capability {
  title: string;
  tools: CapabilityTool[];
  descriptionEn: string;
  descriptionKo: string;
}

export interface CapabilitiesData {
  heading: string;
  items: Capability[];
}

// === Projects ===
export interface ProjectCategory {
  id: string;
  label: string;
  icon?: string;
}

export interface ProjectSkill {
  id: string;
  label: string;
  icon?: string;
}

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
  documentation?: string;
}

export interface Project {
  id: string;
  title: string;
  categories: string[];  // 복수 카테고리 지원
  skills: string[];      // 사용 기술
  thumbnail: string;
  media?: ProjectMedia[];
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  links: ProjectLinks;
  date: string;
  status?: 'completed' | 'in-progress' | 'archived';
  extra?: Record<string, string | number>;
}

export interface ProjectsData {
  title: string;
  subtitle?: string;
  categories: readonly ProjectCategory[];
  skillFilters: readonly ProjectSkill[];  // 스킬 필터 옵션
  items: Project[];
  display: {
    showFilter: boolean;
    itemsPerPage: number;
    layout: 'grid' | 'masonry' | 'list';
  };
}

// === Skills ===
export interface Skill {
  name: string;
  level?: number;
  icon?: string;
  description?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon?: string;
  skills: Skill[];
}

export interface SkillsData {
  title: string;
  subtitle?: string;
  groups: SkillGroup[];
  display: {
    showLevel: boolean;
    showPercentage: boolean;
    layout: 'cards' | 'bars' | 'cloud';
    animate: boolean;
  };
}

// === Contact ===
export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  instagram?: string;
  availability?: string;
}

export interface ContactForm {
  enabled: boolean;
  endpoint?: string;
  fields: ('name' | 'email' | 'subject' | 'message' | 'phone')[];
  submitText: string;
  successMessage: string;
}

export interface ContactData {
  title: string;
  subtitle?: string;
  info: ContactInfo;
  form?: ContactForm;
  showSocial?: boolean;
  calendar?: {
    enabled: boolean;
    text: string;
    href: string;
  };
}
