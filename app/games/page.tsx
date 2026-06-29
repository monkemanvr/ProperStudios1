import Link from 'next/link';
import { ArrowLeft, Calendar, Gamepad2 } from 'lucide-react';
import { games, accentMap } from '@/lib/games';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Games — Proper Studios',
  description:
    'Explore the full portfolio of 3D games from Proper Studios — from neon racing to deep-space survival horror.',
};

export default function GamesPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden grid-bg border-b border-border/60">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Link
            href="/"
            className="font-mono-retro mb-6 inline-flex items-center text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            back to home
          </Link>
          <span className="font-mono-retro block text-xl text-primary">
            {'// our_portfolio'}
          </span>
          <h1 className="font-retro mt-3 text-2xl text-foreground sm:text-4xl">
            THE GAME LIBRARY
          </h1>
          <p className="font-mono-retro mt-6 max-w-2xl text-2xl leading-relaxed text-muted-foreground">
            Six worlds. Hundreds of hours of gameplay. Every title we've shipped
            and every world we're building next — all in one place.
          </p>
        </div>
      </section>

      {/* Games list */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-8">
          {games.map((game, index) => {
            const a = accentMap[game.accent];
            const reversed = index % 2 === 1;
            return (
              <div
                key={game.slug}
                className={`group relative grid gap-6 overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 md:grid-cols-2 md:gap-8 md:p-8 ${
                  reversed ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-video overflow-hidden rounded-md border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className={`absolute top-3 left-3 ${a.bg} ${a.border} border px-2 py-1`}>
                    <span className={`font-mono-retro text-base ${a.text}`}>
                      {game.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={`font-mono-retro border-border text-base ${a.text}`}
                    >
                      {game.genre}
                    </Badge>
                    <span className="font-mono-retro flex items-center gap-1 text-base text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {game.year}
                    </span>
                  </div>

                  <h2 className={`font-retro text-lg ${a.text} ${a.glow} sm:text-xl`}>
                    {game.title}
                  </h2>
                  <p className="font-mono-retro mt-2 text-xl text-foreground/80">
                    {game.tagline}
                  </p>
                  <p className="font-mono-retro mt-4 text-lg leading-relaxed text-muted-foreground">
                    {game.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono-retro text-lg text-primary opacity-70 transition-opacity group-hover:opacity-100">
                    <Gamepad2 className="h-4 w-4" />
                    {game.status === 'Released'
                      ? 'Available now on PC & consoles'
                      : 'Wishlist on Steam'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
