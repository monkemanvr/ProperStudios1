import Link from 'next/link';
import { ArrowRight, Gamepad2, Sparkles, Boxes, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { games, accentMap } from '@/lib/games';

export default function Home() {
  const featured = games.slice(0, 3);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/40 bg-primary/5 font-mono-retro text-base text-primary"
            >
              <span className="mr-2 inline-block h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
              INDEPENDENT 3D GAME STUDIO
            </Badge>

            <h1 className="font-retro text-3xl leading-relaxed tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              PROPER
              <br />
              <span className="text-primary text-glow-cyan">STUDIOS</span>
            </h1>

            <p className="font-mono-retro mt-8 max-w-2xl text-2xl leading-relaxed text-muted-foreground sm:text-3xl">
              We build immersive 3D worlds where bold stories meet cutting-edge
              technology. From neon-soaked racing circuits to deep-space survival
              horror — we craft experiences that players never forget.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="font-mono-retro h-12 rounded-none border-2 border-primary bg-primary/10 px-8 text-xl text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/games">
                  Explore Our Games
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="font-mono-retro h-12 rounded-none border-2 border-border px-8 text-xl text-foreground hover:border-accent hover:text-accent"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border/60 bg-card/30 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {['3D RENDERING', 'UNREAL ENGINE', 'UNITY', 'OPEN WORLD', 'CO-OP MULTIPLAYER', 'RAY TRACING', 'PROCEDURAL GENERATION', 'AAA QUALITY'].map((tag) => (
                  <span key={tag} className="font-retro mx-8 text-xs text-muted-foreground">
                    {tag}
                    <span className="ml-8 text-primary">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              icon: Boxes,
              title: 'Worlds First',
              text: 'Every game starts with a world we want to live in. We build environments that feel alive — reactive, atmospheric, and full of stories waiting to be discovered.',
              accent: 'text-primary',
            },
            {
              icon: Zap,
              title: 'Tech Forward',
              text: 'We push modern engines to their limits with real-time ray tracing, procedural systems, and physics-driven gameplay that makes every moment feel unique.',
              accent: 'text-accent',
            },
            {
              icon: Sparkles,
              title: 'Player Obsessed',
              text: 'We make games we want to play. No live-service bloat, no predatory monetization — just complete, hand-crafted experiences built to be loved for years.',
              accent: 'text-[hsl(84_100%_60%)]',
            },
          ].map((item) => (
            <div key={item.title} className="group relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-border bg-card transition-colors group-hover:border-primary/40">
                <item.icon className={`h-6 w-6 ${item.accent}`} />
              </div>
              <h3 className="font-retro mb-3 text-sm text-foreground">
                {item.title}
              </h3>
              <p className="font-mono-retro text-xl leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Game */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-mono-retro mb-2 text-xl text-primary">
            {'// now_in_development'}
          </span>
          <h2 className="font-retro text-xl text-foreground sm:text-2xl">
            OUR LATEST PROJECT
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {featured.map((game) => {
            const a = accentMap[game.accent];
            return (
              <Link
                key={game.slug}
                href="/games"
                className="group relative block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className={`absolute top-4 left-4 ${a.bg} ${a.border} border px-3 py-1`}>
                    <span className={`font-mono-retro text-lg ${a.text}`}>
                      {game.status}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`font-retro text-lg ${a.text} ${a.glow} sm:text-xl`}>
                    {game.title}
                  </h3>
                  <p className="font-mono-retro mt-3 text-xl text-foreground/80">
                    {game.tagline}
                  </p>
                  <p className="font-mono-retro mt-4 text-lg leading-relaxed text-muted-foreground">
                    {game.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-mono-retro text-lg text-primary opacity-70 transition-opacity group-hover:opacity-100">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="font-mono-retro rounded-none border-2 border-border px-8 text-xl hover:border-primary hover:text-primary"
          >
            <Link href="/games">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4">
          {[
            { value: '12+', label: 'Games Shipped' },
            { value: '8M+', label: 'Players Worldwide' },
            { value: '45', label: 'Studio Members' },
            { value: '2014', label: 'Founded' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-retro text-2xl text-primary text-glow-cyan sm:text-3xl">
                {stat.value}
              </div>
              <div className="font-mono-retro mt-2 text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-retro text-xl text-foreground sm:text-2xl">
          READY TO PLAY?
        </h2>
        <p className="font-mono-retro mt-6 text-2xl leading-relaxed text-muted-foreground">
          Whether you're a publisher looking for your next hit, a developer
          wanting to join our team, or a fan with feedback — we'd love to hear
          from you.
        </p>
        <Button
          asChild
          size="lg"
          className="font-mono-retro mt-8 h-12 rounded-none border-2 border-accent bg-accent/10 px-8 text-xl text-accent hover:bg-accent hover:text-accent-foreground"
        >
          <Link href="/contact">
            Contact The Studio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
