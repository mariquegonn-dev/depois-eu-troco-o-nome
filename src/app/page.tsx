import { ListNav } from "@/components/base/ListNav/list"
import {
  RepositorieProps,
  Repository,
} from "@/components/base/Repositorie/repository"

import { Separator } from "@/components/base/Separator/separator"
import { SideBar } from "@/components/base/Sidebar/sidebar"
import { Skills } from "@/components/base/Skills/Skills"
import { socialsConfig } from "@/config/socials.config"
import { technologiesConfig } from "@/config/technologies.config"
import { FileTsx } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

export const repositoriesConfig: RepositorieProps[] = [
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
    skills: [
      "react",
      "typescript",
      "next",
      "react-query",
      "tailwindcss",
      "react-hook-form",
    ],
    href: true,
  },
  {
    title: "NewSun Energy Group",
    about: (
      <>Landing Page da NewSun Energy Group, uma empresa de energia solar.</>
    ),
    Icon: FileTsx,
    view: "private",
    image: "/repositories/newsun.webp",
    skills: [
      "react",
      "typescript",
      "next",
      "react-query",
      "tailwindcss",
      "react-hook-form",
    ],
    href: true,
  },
  {
    title: "Lotus Fit",
    about:
      "Aplicação web que calcula as calorias diárias necessárias para manter, perder ou ganhar peso.",
    Icon: FileTsx,
    view: "public",
    image: "/repositories/lotus.webp",
    skills: ["react", "typescript", "redux-toolkit"],
    href: true,
  },
  {
    title: "Ecofunding",
    about:
      "Landing page de uma aplicação de financiamento para projetos ecológicos.",
    Icon: FileTsx,
    view: "private",
    image: "/repositories/ecofunding.webp",
    skills: [
      "react",
      "typescript",
      "next",
      "react-query",
      "tailwindcss",
      "react-hook-form",
    ],
    href: true,
  },
]

export default function Home() {
  return (
    <>
      <div className="md:hidden block">
        <SideBar />
      </div>
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
              Sou desenvolvedor frontend, especialista em <strong>React</strong>{" "}
              e <strong>Typescript</strong>. Aspirante a Fullstack e
              desenvolvedor de jogos.<br></br>Atualmente estou estudando Analise
              e Desenvolvimento de Sistemas · 3/5 semestres · porém já atuo na
              área de desenvolvimento há dois anos.
            </p>

            <p className="text-base text-primary-white">
              Amante de trilhas sonoras, ficção científica e pinturas. Pai de
              três gatinhas lindas: Lulu, Kat e Ges.
              <br></br>
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
    </>
  )
}
