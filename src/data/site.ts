// Todo el contenido del portafolio vive aquí.
// Para añadir un proyecto o una red social, edita las listas de abajo.

export const site = {
  name: 'Edward',
  role: 'Desarrollador · Flutter & Web',
  playerClass: 'Desarrollador',
  bio: 'Player 1 construyendo apps móviles y sitios web. Aquí está mi progreso: niveles completados, mi inventario y cómo unirte a mi partida.',
  inventory: ['Flutter', 'Dart', 'Astro', 'HTML', 'CSS', 'JavaScript', 'Git'],
};

export type Project = {
  stage: string;
  title: string;
  description: string;
  tags: string[];
  cover: 'calculator' | 'browser' | 'lock';
  href?: string;
  locked?: boolean;
};

export const projects: Project[] = [
  {
    stage: 'STAGE 1-1',
    title: 'Calculate Desserts',
    description: 'App móvil hecha con Flutter para calcular el precio de tus postres.',
    tags: ['Flutter', 'Dart'],
    cover: 'calculator',
    // TODO: reemplazar por el enlace real del repositorio o demo
    href: '#',
  },
  {
    stage: 'STAGE 1-2',
    title: 'Portafolio Retro',
    description:
      'Este mismo sitio: contenido estático con Astro y animaciones solo donde hacen falta.',
    tags: ['Astro', 'HTML', 'CSS'],
    cover: 'browser',
    href: 'https://github.com/Edward2323/edward2323-dev',
  },
  {
    stage: 'STAGE 1-3',
    title: 'Próximo nivel',
    description: 'Bloqueado. Aquí irá tu siguiente proyecto.',
    tags: ['???'],
    cover: 'lock',
    locked: true,
  },
];

export type Social = {
  port: string;
  name: string;
  badge: string;
  handle: string;
  href: string;
  tone: 'accent' | 'hot';
};

export const socials: Social[] = [
  {
    port: 'PORT 1',
    name: 'GitHub',
    badge: 'GH',
    handle: 'github.com/Edward2323',
    href: 'https://github.com/Edward2323',
    tone: 'accent',
  },
  {
    port: 'PORT 2',
    name: 'LinkedIn',
    badge: 'in',
    // TODO: reemplazar por tu usuario y URL reales de LinkedIn
    handle: 'linkedin.com/in/[tu-usuario]',
    href: '#',
    tone: 'hot',
  },
];
