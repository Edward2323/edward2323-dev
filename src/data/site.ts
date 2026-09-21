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

// Por ahora solo hay un marcador. Para añadir un proyecto real, copia este bloque,
// quita `pending`, y elige una portada: 'phone', 'browser' o 'placeholder'.
export const projects: Project[] = [
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
    handle: 'linkedin.com/in/edward-cabrera-carvajal-72062a28a',
    href: 'https://www.linkedin.com/in/edward-cabrera-carvajal-72062a28a/',
    tone: 'warm',
  },
];
