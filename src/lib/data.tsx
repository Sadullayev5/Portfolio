import { Github, Twitter, Send , Linkedin} from 'lucide-react';


import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';



import ProjectEbay from '../../public/images/Project-Ebay.png'
import ProjectBeautybay from '../../public/images/Project-Beauty-Bay.png'

import {
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Sadullayev5',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://x.com/Sadullayev1804?t=ABIgh23OiJU0f4DKIzEnFw&s=09',
  FIGMA: 'https://www.figma.com/',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Sadullayev5',
  },
  {
    icon: Twitter,
    url: 'https://x.com/Sadullayev1804?t=ABIgh23OiJU0f4DKIzEnFw&s=09',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jonibek-sa-dullayev-83a63b322/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];


export const PROJECTS: ProjectDetails[] = [
  {
    name: 'E-bay clone',
    description:
      'Developed an e-commerce platform using React and JavaScript, incorporating i18next for multilingual support.',
    url: 'https://main-exam-ovxr-pjlvfrz5y-sadullayev5s-projects.vercel.app/',
    previewImage: ProjectEbay,
    technologies: [
      'React',
      'Javascript',
      'Css',
      'i18next',
      'Redux toolkit',
    ],
  },
  {
    name: 'Beauty Bay clone',
    description:
      'Built a modern e-commerce platform using React, TypeScript, and Redux Toolkit with RTK Query for state management.',
    url: 'https://final-exam-ov1k.vercel.app/',
    previewImage: ProjectBeautybay,
    technologies: [
      'React',
      'Typescript',
      'Css',
      'Redux Toolkit',
      'React Query',
    ],
  },
];


