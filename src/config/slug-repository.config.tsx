import { ReactNode } from "react"

export type tecnhologiesItem = {
  title: string
  icon: string
}

export interface SlugRepository {
  title: string
  about: ReactNode
  view: "public" | "private"
  deploy?: string
  repository?: string
  images: string[]
  tecnhologies: {
    lang?: tecnhologiesItem[]
    frontend?: tecnhologiesItem[]
    backend?: tecnhologiesItem[]
    other?: tecnhologiesItem[]
  }
}

export const slugRepositoryConfig: SlugRepository[] = [
  {
    title: "Este Portfolio",
    about: (
      <>Portfolio desenvolvido com Next.js, TailwindCSS e Clean Architeture.</>
    ),
    view: "public",
    repository: "https://github.com/mariquegonn-dev/portfolio-next-14",
    deploy: "https://www.mariquegonn.live/",
    images: [
      "/repositories/este-portfolio.webp",
      "/repositories/este-portfolio-2.webp",
    ],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Next", icon: "/tecnologias/next.webp" },
        { title: "Tailwind", icon: "/tecnologias/tailwind.svg" },
        { title: "React Hook Form", icon: "/tecnologias/hook-form.webp" },
        { title: "Zod", icon: "/tecnologias/zod.webp" },
        { title: "Zustand", icon: "/tecnologias/zustand.png" },
      ],
      other: [
        { title: "Jest", icon: "/tecnologias/jest.svg" },
        { title: "Git", icon: "/tecnologias/git.svg" },
      ],
    },
  },
  {
    title: "UC Livre",
    about: (
      <>
        Landing Page e dashboard de uma aplicação de propostas para o mercado de
        energia.
      </>
    ),
    view: "private",
    deploy: "https://uclivre.com.br/",
    images: ["/repositories/uclivre.webp", "/repositories/uclivre-2.webp"],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Next", icon: "/tecnologias/next.webp" },
        { title: "Tailwind", icon: "/tecnologias/tailwind.svg" },
        { title: "React Hook Form", icon: "/tecnologias/hook-form.webp" },
        { title: "Zod", icon: "/tecnologias/zod.webp" },
        { title: "Zustand", icon: "/tecnologias/zustand.png" },
      ],
      other: [
        { title: "Jest", icon: "/tecnologias/jest.svg" },
        { title: "Git", icon: "/tecnologias/git.svg" },
      ],
    },
  },
  {
    title: "NewSun Energy Group",
    about: (
      <>Landing Page da NewSun Energy Group, uma empresa de energia solar.</>
    ),
    view: "private",
    deploy: "https://www.newsun.energy/",
    images: ["/repositories/newsun.webp", "/repositories/newsun-2.webp"],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Next", icon: "/tecnologias/next.webp" },
        { title: "Tailwind", icon: "/tecnologias/tailwind.svg" },
        { title: "React Hook Form", icon: "/tecnologias/hook-form.webp" },
        { title: "Zod", icon: "/tecnologias/zod.webp" },
        { title: "Zustand", icon: "/tecnologias/zustand.png" },
      ],
      other: [
        { title: "Jest", icon: "/tecnologias/jest.svg" },
        { title: "Git", icon: "/tecnologias/git.svg" },
      ],
    },
  },
  {
    title: "Lotus Fit",
    about: (
      <>
        Aplicação web que calcula as calorias diárias necessárias para manter,
        perder ou ganhar peso.
      </>
    ),
    view: "public",
    deploy: "https://lotusfit.netlify.app/",
    repository: "https://github.com/mariquegonn-dev/lotus-ts",
    images: ["/repositories/lotus.webp", "/repositories/lotus-2.webp"],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Vite", icon: "/tecnologias/vite.svg" },
        { title: "CSS", icon: "/tecnologias/css.svg" },
        { title: "Redux", icon: "/tecnologias/redux.svg" },
      ],
      other: [
        { title: "Git", icon: "/tecnologias/git.svg" },
        { title: "Figma", icon: "/tecnologias/figma.svg" },
      ],
    },
  },
  {
    title: "Ecofunding",
    about: (
      <>
        Landing page de uma aplicação de financiamento para projetos ecológicos.
      </>
    ),
    view: "private",
    deploy: "https://ecofunding.com.br/",
    images: [
      "/repositories/ecofunding.webp",
      "/repositories/ecofunding-2.webp",
    ],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Next", icon: "/tecnologias/next.webp" },
        { title: "Tailwind", icon: "/tecnologias/tailwind.svg" },
        { title: "React Hook Form", icon: "/tecnologias/hook-form.webp" },
        { title: "Zod", icon: "/tecnologias/zod.webp" },
        { title: "Zustand", icon: "/tecnologias/zustand.png" },
      ],
      other: [{ title: "Git", icon: "/tecnologias/git.svg" }],
    },
  },
  {
    title: "Mr8 Cursos",
    about: <>Site institucional de um curso preparatório para IFBA e ENEM.</>,
    view: "public",
    deploy: "https://mr8-next.vercel.app/",
    repository: "https://github.com/mariquegonn-dev/mr8-next",
    images: ["/repositories/mr8.webp", "/repositories/mr8-2.webp"],
    tecnhologies: {
      lang: [{ title: "Typescript", icon: "/tecnologias/ts.svg" }],
      frontend: [
        { title: "React", icon: "/tecnologias/react.svg" },
        { title: "Next", icon: "/tecnologias/next.webp" },
        { title: "Tailwind", icon: "/tecnologias/tailwind.svg" },
        { title: "React Hook Form", icon: "/tecnologias/hook-form.webp" },
        { title: "Zod", icon: "/tecnologias/zod.webp" },
        { title: "Zustand", icon: "/tecnologias/zustand.png" },
      ],
      backend: [
        {
          title: "NodeJS",
          icon: "/tecnologias/node.webp",
        },
        {
          title: "ExpressJS",
          icon: "/tecnologias/express.svg",
        },
      ],
      other: [
        { title: "Jest", icon: "/tecnologias/jest.svg" },
        { title: "Git", icon: "/tecnologias/git.svg" },
      ],
    },
  },
]
