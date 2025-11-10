// Fix: Import `ReactNode` to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface Service {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  details: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
