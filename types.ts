import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio?: string;
  group: 'founders' | 'executives' | 'technical';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  coverage: string[];
  deliverables: string[];
  idealFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}