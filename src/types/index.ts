export interface ProjectSection {
  title: string;
  description: string;
  image: string;
  challenges?: string;
  results?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  sections: ProjectSection[];
  additionalPhotos?: string[];
  videos?: Array<{
    url: string;
    title?: string;
    thumbnail?: string;
  }>;
}