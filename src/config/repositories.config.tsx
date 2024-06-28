import { RepositoryProps } from "@/components/base/Repository/repository"
import { FileTsx } from "@phosphor-icons/react/dist/ssr"

export const repositoriesConfig: RepositoryProps[] = [
  {
    title: "Este portfolio",
    about: (
      <>Portfolio desenvolvido com Next.js, TailwindCSS e Clean Architeture.</>
    ),
    Icon: FileTsx,
    view: "public",
    image: "/repositories/este-portfolio.webp",
  },
  {
    title: "Mr8 Cursos",
    about: <>Site institucional de um curso preparatório para IFBA e ENEM.</>,
    Icon: FileTsx,
    view: "public",
    image: "/repositories/mr8.webp",
  },
  {
    title: "UC Livre",
    about: (
      <>
        Landing Page e dashboard de uma aplicação de propostas para o mercado de
        energia.
      </>
    ),
    Icon: FileTsx,
    view: "private",
    image: "/repositories/uclivre.webp",
  },
  {
    title: "NewSun Energy Group",
    about: (
      <>Landing Page da NewSun Energy Group, uma empresa de energia solar.</>
    ),
    Icon: FileTsx,
    view: "private",
    image: "/repositories/newsun.webp",
  },
  {
    title: "Lotus Fit",
    about:
      "Aplicação web que calcula as calorias diárias necessárias para manter, perder ou ganhar peso.",
    Icon: FileTsx,
    view: "public",
    image: "/repositories/lotus.webp",
  },
  {
    title: "Ecofunding",
    about:
      "Landing page de uma aplicação de financiamento para projetos ecológicos.",
    Icon: FileTsx,
    view: "private",
    image: "/repositories/ecofunding.webp",
  },
]
