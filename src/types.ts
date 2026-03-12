export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  industry: string;
  content: string;
  image: string;
}
