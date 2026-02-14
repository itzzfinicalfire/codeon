import { LucideIcon } from 'lucide-react';

export interface Game {
  id: string;
  name: string;
  image: string;
  popular?: boolean;
  price?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}