// Todo el contenido del portafolio vive aquí.
// Para añadir un proyecto o una red social, edita las listas de abajo.

export const site = {
  name: 'Edward',
  role: 'Desarrollador · Flutter & Web',
  bio: 'Desarrollo aplicaciones móviles y sitios web. Aquí reúno mis proyectos, las tecnologías que utilizo y mis redes profesionales.',
};

export const technologies = ['Flutter', 'Dart', 'Astro', 'HTML', 'CSS', 'JavaScript', 'Git'];

export type Project = {
  title: string;
  /** Texto corto en la cabecera de la tarjeta, junto al número */
  meta: string;
  description: string;
  tags: string[];
  cover: 'phone' | 'browser' | 'placeholder';
  href?: string;
  /** Proyecto aún sin definir: se muestra apagado y sin enlace */
  pending?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Calculate Desserts',
    meta: 'Flutter · Dart',
    description: 'Aplicación móvil hecha con Flutter para calcular el precio de postres.',
    tags: ['Flutter', 'Dart'],
    cover: 'phone',
    // TODO: reemplazar por el enlace real del repositorio o demo
    href: '#',
  },
  {
    title: 'Portafolio Retro',
    meta: 'Astro · Web',
    description: 'Este sitio: contenido estático con Astro y animaciones solo donde hacen falta.',
    tags: ['Astro', 'HTML', 'CSS'],
    cover: 'browser',
    href: 'https://github.com/Edward2323/edward2323-dev',
  },
  {
    title: 'Próximo proyecto',
    meta: 'Por definir',
    description: 'Espacio reservado para el siguiente proyecto.',
    tags: ['Por definir'],
    cover: 'placeholder',
    pending: true,
  },
];

export type Social = {
  name: string;
  badge: string;
  handle: string;
  href: string;
  tone: 'accent' | 'warm';
};

export const socials: Social[] = [
  {
    name: 'GitHub',
    badge: 'GH',
    handle: 'github.com/Edward2323',
    href: 'https://github.com/Edward2323',
    tone: 'accent',
  },
  {
    name: 'LinkedIn',
    badge: 'in',
    // TODO: reemplazar por tu usuario y URL reales de LinkedIn
    handle: 'linkedin.com/in/[tu-usuario]',
    href: '#',
    tone: 'warm',
  },
];
