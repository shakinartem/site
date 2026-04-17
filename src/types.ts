import type { LucideIcon } from 'lucide-react';

export type CaseCategory = 'Все' | 'Сайты' | 'Боты' | 'Автоматизация';

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseItem {
  title: string;
  category: Exclude<CaseCategory, 'Все'>;
  description: string;
  stack: string[];
}

export interface PriceItem {
  title: string;
  price: string;
  description: string;
}

export type LegalType = 'privacy' | 'terms';
