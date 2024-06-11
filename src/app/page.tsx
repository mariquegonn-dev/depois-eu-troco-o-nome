import { ListNav } from "@/components/base/ListNav/list"
import {
  RepositorieProps,
  Repository,
} from "@/components/base/Repositorie/repository"

import { Separator } from "@/components/base/Separator/separator"
import { Skills } from "@/components/base/Skills/Skills"
import { socialsConfig } from "@/config/socials.config"
import {
  FileHtml,
  FileJs,
  FileJsx,
  FileTs,
  FileTsx,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

const repositoriesConfig: RepositorieProps[] = [
  {
    title: "UC Livre",
    about: (
      <>
        Landing Page e dashboard de uma aplicação de propostas para o mercado de
        energia.
      </>
    ),
    Icon: FileTsx,
    href: "/repositories/lotus-fit-react-javascript-context-api",
    view: "private",
  },
  {
    title: "NewSun Energy Group",
    about: (
      <>Landing Page da NewSun Energy Group, uma empresa de energia solar.</>
    ),
    Icon: FileJsx,
    href: "/repositories/lotus-fit-react-javascript-context-api",
    view: "private",
  },
  {
    title: "Lotus Fit",
    about:
      "Aplicação web que calcula as calorias diárias necessárias para manter, perder ou ganhar peso.",
    Icon: FileTsx,
    href: "/repositories/lotus-fit-typescript-redux-toolkit",
    view: "public",
  },
  {
    title: "Blog Pessoal",
    about:
      "Uma aplicação pessoal. O Blog é alimentado por arquivos MDX e gerenciado por um CMS.",
    Icon: FileTsx,
    href: "/repositories/blog-mdx-cms",
    view: "public",
  },
]

const technologiesConfig = [
  {
    icon: "/tecnologias/html.webp",
    title: "HTML5",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/css.webp",
    title: "CSS",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/js.webp",
    title: "Javascript",
    about: "Linguagem",
  },
  {
    icon: "/tecnologias/ts.webp",
    title: "Typescript",
    about: "Linguagem",
  },
  {
    icon: "/tecnologias/react.webp",
    title: "React",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/tailwind.webp",
    title: "Tailwind",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/bootstrap.webp",
    title: "Bootstrap",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/chakra.svg",
    title: "ChakraUI",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/styled-components.svg",
    title: "Styled Components",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/hook-form.webp",
    title: "React Hook Form",
    about: "Front-end",
  },
  {
    icon: "/tecnologias/next.webp",
    title: "NextJS",
    about: "Fullstack",
  },
  {
    icon: "/tecnologias/node.webp",
    title: "NodeJS",
    about: "Back-end",
  },
  {
    icon: "/tecnologias/prisma.webp",
    title: "Prisma",
    about: "Back-end",
  },
  {
    icon: "/tecnologias/zod.webp",
    title: "Zod",
    about: "Fullstack",
  },
  {
    icon: "/tecnologias/git.webp",
    title: "Git",
    about: "CI/CD",
  },
  {
    icon: "/tecnologias/jest.webp",
    title: "Jest",
    about: "Teste",
  },
]

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-5 md:mt-0 mt-5">
      <div>
        <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
          Sobre mim
        </p>
        <div className="border border-primary-gray p-5 rounded-md flex flex-col gap-5">
          <h1 className="flex flex-col gap-1 text-xl font-medium">
            Olá, Mundo! <Separator />
          </h1>

          <p className="text-base text-primary-white">
            Sou desenvolvedor frontend, especialista em <strong>React</strong> e{" "}
            <strong>Typescript</strong>. Aspirante a Fullstack e desenvolvedor
            de jogos. Amante de trilhas sonoras, ficção científica e pinturas.
            Pai de três gatinhas lindas, Lulu, Kat e Ges.
          </p>

          <ListNav variant="main" config={socialsConfig} target="_blank" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
          Repositórios
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {repositoriesConfig.map(({ Icon, about, href, title, view }) => (
            <Repository
              Icon={Icon}
              about={about}
              href={href}
              title={title}
              view={view}
              key={title}
            />
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
          Tecnologias e Conhecimentos
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {technologiesConfig.slice(0, 6).map(({ about, icon, title }) => (
            <Skills
              src={<Image src={icon} width={36} height={36} alt={title} />}
              about={about}
              title={title}
              key={title}
            />
          ))}
        </ul>
      </div>

      <Link
        className="p-2 text-center capitalize text-secundary-gray w-full border border-primary-gray rounded-md hover:bg-primary-gray/30"
        href="/skills"
      >
        Ver todos
      </Link>
    </main>
  )
}
