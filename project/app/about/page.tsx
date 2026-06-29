import Link from 'next/link';
import { ArrowLeft, Target, Heart, Code2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About — Proper Studios',
  description:
    'The story of Proper Studios — an independent 3D game development studio founded in 2014 by a team obsessed with building worlds.',
};

const values = [
  {
    icon: Target,
    title: 'Craft Over Hype',
    text: "We ship when it's ready, not when the market demands it. Quality is the only metric that matters to us.",
    accent: 'text-primary',
  },
  {
    icon: Heart,
    title: 'Respect The Player',
    text: "No loot boxes. No battle passes. No FOMO mechanics. We sell complete games and we stand behind them.",
    accent: 'text-accent',
  },
  {
    icon: Code2,
    title: 'Engine Agnostic',
    text: "We work in Unreal, Unity, and our own custom tooling. The right tool for the right job — never dogma.",
    accent: 'text-[hsl(84_100%_60%)]',
  },
  {
    icon: Users,
    title: 'Studio As Family',
    text: "No crunch. No burnout. We've built a culture where people stay for a decade because they love the work.",
    accent: 'text-[hsl(38_100%_56%)]',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    text: "Maya and Diego leave their AAA jobs and found Proper Studios in a converted warehouse with 4 people.",
  },
  {
    year: '2016',
    title: 'First Release',
    text: "Our debut title ships on PC and earns a cult following. The studio grows to 12 people.",
  },
  {
    year: '2019',
    title: 'Going Multiplatform',
    text: "We release our first console title and expand to 30 team members across two production teams.",
  },
  {
    year: '2023',
    title: 'Glitch Runners',
    text: "Our co-op heist game becomes our first million-seller and earns a BAFTA nomination.",
  },
  {
    year: '2025',
    title: 'The Next Era',
    text: "Three titles in simultaneous development. 45 team members. Still independent. Still obsessed.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden grid-bg border-b border-border/60">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Link
            href="/"
            className="font-mono-retro mb-6 inline-flex items-center text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            back to home
          </Link>
          <span className="font-mono-retro block text-xl text-primary">
            {'// our_story'}
          </span>
          <h1 className="font-retro mt-3 text-2xl text-foreground sm:text-4xl">
            ABOUT THE STUDIO
          </h1>
          <p className="font-mono-retro mt-6 max-w-3xl text-2xl leading-relaxed text-muted-foreground">
            Proper Studios is an independent 3D game development studio founded
            in 2014 by a small team of industry veterans who wanted to make
            games differently. No publishers breathing down our necks. No
            committees diluting the vision. Just talented people building worlds
            they're proud of.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <span className="font-mono-retro text-xl text-primary">
            {'// what_we_believe'}
          </span>
          <h2 className="font-retro mt-2 text-lg text-foreground sm:text-xl">
            OUR PRINCIPLES
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-border bg-background">
                <value.icon className={`h-6 w-6 ${value.accent}`} />
              </div>
              <h3 className="font-retro mb-3 text-sm text-foreground">
                {value.title}
              </h3>
              <p className="font-mono-retro text-xl leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="mb-12 text-center">
            <span className="font-mono-retro text-xl text-primary">
              {'// the_journey'}
            </span>
            <h2 className="font-retro mt-2 text-lg text-foreground sm:text-xl">
              A DECADE IN THE MAKING
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-2 sm:w-1/2 ${
                    i % 2 === 0
                      ? 'sm:pr-12'
                      : 'sm:ml-auto sm:pl-12'
                  } pl-12 sm:pl-0`}
                >
                  <div
                    className={`absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background sm:left-auto ${
                      i % 2 === 0 ? 'sm:-right-1.5 sm:translate-x-1/2' : 'sm:-left-1.5 sm:-translate-x-1/2'
                    }`}
                  />
                  <span className="font-retro text-xs text-primary text-glow-cyan">
                    {item.year}
                  </span>
                  <h3 className="font-retro text-sm text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-mono-retro text-lg leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6">
        <h2 className="font-retro text-lg text-foreground sm:text-xl">
          WANT TO JOIN US?
        </h2>
        <p className="font-mono-retro mt-6 text-2xl leading-relaxed text-muted-foreground">
          We're always looking for talented people who care about the craft.
          Reach out — even if there's no open role listed.
        </p>
        <Button
          asChild
          size="lg"
          className="font-mono-retro mt-8 h-12 rounded-none border-2 border-primary bg-primary/10 px-8 text-xl text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </section>
    </div>
  );
}
