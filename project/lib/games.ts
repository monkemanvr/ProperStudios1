export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  genre: string;
  status: 'Released' | 'In Development' | 'Coming Soon';
  year: string;
  image: string;
  accent: 'cyan' | 'magenta' | 'lime' | 'amber';
};

export const games: Game[] = [
  {
    slug: 'proper-cool',
    title: 'PROPER COOL',
    tagline: 'Stay cool. Stay proper.',
    description:
      'A vibrant 3D adventure that drops you into a sun-soaked open world full of secrets, challenges, and characters with attitude. Explore at your own pace, master an arsenal of cool abilities, and carve your own path through a world that rewards curiosity and style in equal measure.',
    genre: '3D Adventure / Open World',
    status: 'In Development',
    year: '2025',
    image:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'cyan',
  },
];

export const accentMap = {
  cyan: {
    text: 'text-primary',
    glow: 'text-glow-cyan',
    border: 'border-primary',
    bg: 'bg-primary/10',
    ring: 'ring-primary/30',
    shadow: 'shadow-[0_0_20px_hsl(187_100%_50%_/_0.3)]',
  },
  magenta: {
    text: 'text-accent',
    glow: 'text-glow-magenta',
    border: 'border-accent',
    bg: 'bg-accent/10',
    ring: 'ring-accent/30',
    shadow: 'shadow-[0_0_20px_hsl(322_100%_62%_/_0.3)]',
  },
  lime: {
    text: 'text-[hsl(84_100%_60%)]',
    glow: 'text-glow-lime',
    border: 'border-[hsl(84_100%_60%)]',
    bg: 'bg-[hsl(84_100%_60%_/_0.1)]',
    ring: 'ring-[hsl(84_100%_60%_/_0.3)]',
    shadow: 'shadow-[0_0_20px_hsl(84_100%_60%_/_0.3)]',
  },
  amber: {
    text: 'text-[hsl(38_100%_56%)]',
    glow: '',
    border: 'border-[hsl(38_100%_56%)]',
    bg: 'bg-[hsl(38_100%_56%_/_0.1)]',
    ring: 'ring-[hsl(38_100%_56%_/_0.3)]',
    shadow: 'shadow-[0_0_20px_hsl(38_100%_56%_/_0.3)]',
  },
} as const;
