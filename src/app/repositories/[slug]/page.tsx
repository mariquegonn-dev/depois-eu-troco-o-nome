import { PreviousUrl } from "@/components/base/PreviousUrl/previous-url"
import { slugRepositoryConfig } from "@/config/slug-repository.config"
import { newHref } from "@/helpers/new-href"
import Image from "next/image"
import { Technologies } from "./(components)/technologies"
import { LinkRepositories } from "./(components)/link-repositories"
import { Section } from "@/components/base/Main/main"
import { Text } from "@/components/base/Text/text"
import { View } from "@/components/base/View/view"

export default function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <Section>
      {slugRepositoryConfig
        .filter(({ title }) => newHref(title) === params.slug)
        .map(
          ({
            title,
            view,
            about,
            deploy,
            repository,
            images,
            tecnhologies,
          }) => (
            <div className="flex flex-col gap-3">
              <PreviousUrl />
              <Text type="h1" variant="xl" className="flex items-center gap-3">
                {title}
                <View>{view}</View>
              </Text>
              <Text type="p" className="text-secundary-gray font-light">
                {about}
              </Text>
              <div className="flex gap-5 items-center relative z-[10]">
                <LinkRepositories label="Live Preview" href={deploy} />
                <LinkRepositories label="Repositório" href={repository} />
              </div>

              <div className="grid xl:grid-cols-[1fr_auto] gap-10 mt-5">
                <ul className="rounded-lg w-full xl:h-[600px] overflow-x-scroll xl:overflow-x-hidden xl:overflow-y-scroll flex xl:flex-col gap-10 scroll-images-repository xl:pr-1 pb-1">
                  {images.map((image, imageIndex) => (
                    <li
                      key={`${imageIndex}-image-${params.slug}`}
                      className="flex-none"
                    >
                      <Image
                        priority
                        className="w-[500px] xl:w-max rounded-lg h-[300px] object-cover"
                        width={1000}
                        height={1000}
                        src={image}
                        alt={`image-${title}-${imageIndex}`}
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-5">
                  <Text type="h1" variant="xl">
                    Tecnologias
                  </Text>

                  {tecnhologies.lang && (
                    <Technologies
                      config={tecnhologies.lang}
                      label="Linguagem"
                    />
                  )}
                  {tecnhologies.frontend && (
                    <Technologies
                      config={tecnhologies.frontend}
                      label="Front-end"
                    />
                  )}

                  {tecnhologies.backend && (
                    <Technologies
                      config={tecnhologies.backend}
                      label="Back-end"
                    />
                  )}

                  {tecnhologies.other && (
                    <Technologies config={tecnhologies.other} label="Outros" />
                  )}
                </div>
              </div>
            </div>
          )
        )}
    </Section>
  )
}
