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
    slug: 'neon-drift',
    title: 'NEON DRIFT',
    tagline: 'Outrun the end of the world',
    description:
      'A high-octane synthwave racing game where you pilot hover-vehicles through procedurally generated neon cities. Master gravity-defying tracks, customize your ride, and chase the sunset across an endless digital horizon.',
    genre: 'Racing / Arcade',
    status: 'Released',
    year: '2024',
    image:
      'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'cyan',
  },
  {
    slug: 'void-protocol',
    title: 'VOID PROTOCOL',
    tagline: 'Survive the silence of space',
    description:
      'A first-person survival horror set aboard a derelict deep-space station. Scavenge for resources, decode alien artifacts, and outrun the thing that hunts in the dark. Every shadow tells a story — if you live long enough to read it.',
    genre: 'Survival Horror / FPS',
    status: 'In Development',
    year: '2025',
    image:
      'https://images.pexels.com/photos/73830/lights-night-dusk-dark-73830.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'magenta',
  },
  {
    slug: 'kingdoms-of-iron',
    title: 'KINGDOMS OF IRON',
    tagline: 'Forge your dynasty in a living world',
    description:
      'An open-world action RPG set in a sprawling medieval continent torn by war. Build castles, command armies, and negotiate with rival factions in a fully simulated economy where every decision reshapes the political map.',
    genre: 'Action RPG / Open World',
    status: 'Coming Soon',
    year: '2026',
    image:
      'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'amber',
  },
  {
    slug: 'glitch-runners',
    title: 'GLITCH RUNNERS',
    tagline: 'Break the system before it breaks you',
    description:
      'A cooperative heist game set inside a corrupted digital city. Play as a crew of hackers with unique abilities, infiltrate corporate servers, and pull off daring escapes in a world where the code itself is your playground.',
    genre: 'Co-op / Heist',
    status: 'Released',
    year: '2023',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'lime',
  },
  {
    slug: 'starforge',
    title: 'STARFORGE',
    tagline: 'Build among the stars',
    description:
      'A sandbox space simulation where you harvest asteroids, construct orbital stations, and trade with alien civilizations. Explore a persistent galaxy of 100,000 star systems, each with its own ecosystems, economies, and mysteries.',
    genre: 'Sandbox / Simulation',
    status: 'In Development',
    year: '2025',
    image:
      'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-956981.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'cyan',
  },
  {
    slug: 'echoes-of-eden',
    title: 'ECHOES OF EDEN',
    tagline: 'A world that remembers everything',
    description:
      'A narrative-driven adventure through a post-human Earth reclaimed by nature. Play as an android awakening after centuries of silence, uncovering the memories of those who came before in a hand-crafted world of breathtaking scale.',
    genre: 'Adventure / Narrative',
    status: 'Coming Soon',
    year: '2026',
    image:
      'https://images.pexels.com/photos/957061/milky-way-planet-planet-vortex-957061.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'magenta',
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
