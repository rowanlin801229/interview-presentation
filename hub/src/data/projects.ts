export type Project = {
  title: string
  tags: string
  href: string
  cover: string
  index: string
}

export const PROJECTS: Project[] = [
  {
    title: 'FainTV',
    tags: 'Cross-device · TV / Mobile / Web',
    href: '../faintv/index.html',
    cover: '/covers/faintv.jpg',
    index: '01',
  },
  {
    title: 'Gene Health Tech',
    tags: 'Responsive Web · Branding',
    href: 'https://www.rowanlin1229.com/genebook.html',
    cover: '/covers/gene.jpg',
    index: '02',
  },
  {
    title: 'Visual Cues Study',
    tags: 'UX Research · Mixed Methods',
    href: 'https://www.rowanlin1229.com/vcue.html',
    cover: '/covers/vcue.jpg',
    index: '03',
  },
]
