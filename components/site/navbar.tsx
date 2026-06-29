'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary ring-1 ring-primary/30">
            <Gamepad2 className="h-5 w-5" />
          </span>
          <span className="font-retro text-xs tracking-tight text-foreground sm:text-sm">
            PROPER<span className="text-primary">_</span>STUDIOS
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-mono-retro px-3 py-2 text-xl transition-colors',
                    active
                      ? 'text-primary text-glow-cyan'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {active ? '> ' : ''}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'font-mono-retro block px-3 py-2 text-2xl transition-colors',
                      active
                        ? 'text-primary text-glow-cyan'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {active ? '> ' : ''}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
