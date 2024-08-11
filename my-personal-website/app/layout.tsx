// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem'
          }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Your Name</p>
        </footer>
      </body>
    </html>
  );
}