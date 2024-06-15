import { Skills } from "@/components/base/Skills/Skills"
import { technologiesConfig } from "@/config/technologies.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MariqueGonn's Portfolio - Tecnologias",
}

export default function SkillsPage() {
  return (
    <main className="text-white animate-slide-left">
      <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider">
        Tecnologias e Conhecimentos
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
        {technologiesConfig.map(({ about, Icon, title }) => (
          <Skills Icon={Icon} about={about} title={title} key={title} />
        ))}
      </ul>
    </main>
  )
}
