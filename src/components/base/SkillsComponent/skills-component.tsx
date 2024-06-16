import { Section } from "@/components/base/Main/main"
import { Skills } from "@/components/base/Skills/Skills"
import { Text } from "@/components/base/Text/text"
import { skillsConfig } from "@/config/skills.config"
import { Variant } from "@/types/variant.type"
import Link from "next/link"

type SkillsPageProps = {
  variant?: Variant
}

export const SkillsComponent = ({ variant = "page" }: SkillsPageProps) => {
  const items = variant === "home" ? skillsConfig.slice(0, 6) : skillsConfig
  return (
    <Section>
      <Text type="h1" variant="title-page">
        Tecnologias e Conhecimentos
      </Text>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
        {items.map(({ about, Icon, title }) => (
          <li key={`technologies-${variant}-${title}`} className="flex">
            <Skills Icon={Icon} about={about} title={title} />
          </li>
        ))}
      </ul>

      {variant === "home" && (
        <Link
          className="mt-3 p-2 text-center capitalize text-secundary-gray w-full border border-primary-gray rounded-md hover:bg-primary-gray/30"
          href="/skills"
        >
          Ver todos
        </Link>
      )}
    </Section>
  )
}
