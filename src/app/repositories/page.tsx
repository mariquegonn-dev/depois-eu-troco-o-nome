import { Repository } from "@/components/base/Repositorie/repository"
import { repositoriesConfig } from "../page"

export default function Repositories() {
  return (
    <main className="w-full flex flex-col gap-5 md:mt-0 mt-5">
      <div>
        <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
          Repositórios
        </p>

        <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {repositoriesConfig.map(
            ({ Icon, about, href, title, view, image, skills }) => (
              <Repository
                Icon={Icon}
                about={about}
                href={href}
                title={title}
                view={view}
                key={title}
                image={image}
                skills={skills}
              />
            )
          )}
        </ul>
      </div>
    </main>
  )
}
