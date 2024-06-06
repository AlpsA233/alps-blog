interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Personal Website',
    description: `A Next.js, Tailwind CSS project which is based on Next App directory with React Server Component and uses Contentlayer to manage markdown content. 
    It is my go-to place for sharing recent discoveries and experiences, as well as testing out front end technologies.`,
    imgSrc: '/static/images/banner.png',
    href: 'https://github.com/AmosChenZixuan/amoschenzixuan.github.io',
  },
]

export default projectsData
