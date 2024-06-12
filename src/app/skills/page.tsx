import { Skills } from "@/components/base/Skills/Skills"
import { technologiesConfig } from "@/config/technologies.config"
import Image from "next/image"

export default function SkillsPage() {
  return (
    <main className="text-white">
      <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
        Tecnologias e Conhecimentos
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
        {technologiesConfig.map(({ about, icon, title }) => (
          <Skills
            src={<Image src={icon} width={36} height={36} alt={title} />}
            about={about}
            title={title}
            key={title}
          />
        ))}
      </ul>
    </main>
  )
}
