import Link from 'next/link';
import { Gamepad2, Twitter, Github, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary ring-1 ring-primary/30">
                <Gamepad2 className="h-4 w-4" />
              </span>
              <span className="font-retro text-xs text-foreground">
                PROPER<span className="text-primary">_</span>STUDIOS
              </span>
            </Link>
            <p className="font-mono-retro max-w-xs text-center text-lg text-muted-foreground md:text-left">
              Crafting immersive 3D worlds, one pixel at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <nav className="flex gap-4 font-mono-retro text-lg text-muted-foreground">
              <Link href="/games" className="hover:text-primary">
                Games
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center">
          <p className="font-mono-retro text-base text-muted-foreground">
            © {new Date().getFullYear()} Proper Studios. All rights reserved.
            <span className="mx-2 text-primary">|</span>
            Press Start to Play
          </p>
        </div>
      </div>
    </footer>
  );
}
