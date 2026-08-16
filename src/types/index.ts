export interface ProjectSection {
  title: string;
  description: string;
  image: string;
  /** Descriptive alt text. Falls back to the section title when omitted. */
  imageAlt?: string;
  /** Short technical caption rendered beneath the image. */
  caption?: string;
  challenges?: string;
  results?: string;
}

/** A labelled row in the project quick-facts panel (objective, role, constraints, ...). */
export interface ProjectFact {
  label: string;
  value: string;
}

/** Technologies grouped by discipline so mechanical tags always read first. */
export interface ToolGroup {
  label: string;
  items: string[];
}

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  url: string;
  title?: string;
  thumbnail?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  /** One-line positioning shown under the title on cards and the project hero. */
  description: string;
  /** Optional card-specific summary (1-2 sentences). Falls back to description. */
  summary?: string;
  /** Short role statement, e.g. "Primary engineer — concept through commissioning". */
  role?: string;
  tags: string[];
  link?: string;
  /** Overrides the first section image for cards and the project hero banner. */
  heroImage?: string;
  heroAlt?: string;
  /** Structured problem / role / constraints / fabrication / outcome breakdown. */
  facts?: ProjectFact[];
  /** Resume-style scope bullets, kept short and scannable. */
  highlights?: string[];
  toolGroups?: ToolGroup[];
  sections: ProjectSection[];
  additionalPhotos?: ProjectPhoto[];
  videos?: ProjectVideo[];
}
