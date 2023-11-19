import { ReactNode } from 'react';

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel='noopener noreferrer'
      target='_blank'
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </a>
  );
}