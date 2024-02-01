import { ReactNode } from 'react';

export interface NavProps {
  children: ReactNode;
}

export interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}
