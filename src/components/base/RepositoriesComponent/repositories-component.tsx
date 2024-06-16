import { Section } from "@/components/base/Main/main"
import { Repository } from "@/components/base/Repository/repository"
import { Text } from "@/components/base/Text/text"
import { repositoriesConfig } from "@/config/repositories.config"
import { Variant } from "@/types/variant.type"

type RepositoriesPageProps = {
  variant?: Variant
}

export const RepositoriesComponent = ({
  variant = "page",
}: RepositoriesPageProps) => {
  const items =
    variant === "home" ? repositoriesConfig.slice(0, 4) : repositoriesConfig

  return (
    <Section>
      <Text type="h1" variant="title-page">
        Repositórios
      </Text>

      <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
        {items.map(({ Icon, about, title, view, image }) => (
          <li
            key={`${title}-repository-${variant === "home" ? "home" : "page"}}`}
            className="flex"
          >
            <Repository
              Icon={Icon}
              about={about}
              title={title}
              view={view}
              image={variant === "page" ? image : null}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
