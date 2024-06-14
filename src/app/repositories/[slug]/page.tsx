import { PreviousUrl } from "@/components/base/PreviousUrl/previous-url"
import { slugRepositoryConfig } from "@/config/slug-repository.config"
import { newHref } from "@/helpers/new-href"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

export default function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <main>
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
              <h1 className="flex items-center gap-3 text-xl font-medium">
                {title}
                <span className="capitalize text-xs text-secundary-gray border border-primary-gray px-2 py-[2px] rounded-full cursor-default">
                  {view}
                </span>
              </h1>
              <p className="text-secundary-gray font-light">{about}</p>
              <div className="flex gap-5 items-center relative z-[10]">
                <Link
                  href={deploy || ""}
                  target="_blank"
                  className={cn(
                    "flex max-w-[200px] justify-center items-center gap-2 w-full py-[6px] px-2 text-primary-white/80 hover:text-primary-white hover:bg-primary-black/50 rounded-md border border-primary-gray transition-colors font-medium",
                    !deploy && "cursor-not-allowed opacity-30 font-normal"
                  )}
                >
                  Live Preview
                </Link>
                <Link
                  href={repository || ""}
                  target="_blank"
                  className={cn(
                    "flex max-w-[200px] justify-center items-center gap-2 w-full py-[6px] px-2 text-primary-white/80 hover:text-primary-white hover:bg-primary-black/50 rounded-md border border-primary-gray transition-colors font-medium",
                    !repository && "cursor-not-allowed opacity-30 font-normal"
                  )}
                >
                  Repositório
                </Link>
              </div>

              <div className="grid xl:grid-cols-[1fr_auto] gap-10 mt-5">
                <ul className="rounded-lg h-[600px] overflow-y-scroll flex flex-col gap-3 scroll-images-repository pr-1">
                  {images.map((image, imageIndex) => (
                    <li>
                      <Image
                        className="rounded-lg"
                        width={1000}
                        height={1000}
                        src={image}
                        alt={`image-${title}-${imageIndex}`}
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl font-medium">Tecnologias</h1>
                  {tecnhologies.lang && (
                    <div className="flex flex-col gap-2">
                      <h1 className="text-secundary-gray font-medium uppercase tracking-wider">
                        Linguagem
                      </h1>
                      <ul className="flex gap-5 xl:max-w-[400px] flex-wrap">
                        {tecnhologies.lang.map(({ icon, title }) => (
                          <li className="border border-primary-gray px-5 py-3 rounded-sm sm:w-[180px] flex items-center gap-2 hover:bg-primary-gray/30 transition-colors">
                            <Image
                              src={icon}
                              width={18}
                              height={18}
                              alt={title}
                            />

                            <p className="text-sm capitalize text-primary-white font-medium">
                              {title}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tecnhologies.frontend && (
                    <div className="flex flex-col gap-2">
                      <h1 className="text-secundary-gray font-medium uppercase tracking-wider">
                        Front-end
                      </h1>
                      <ul className="flex gap-5 xl:max-w-[400px] flex-wrap">
                        {tecnhologies.frontend.map(({ icon, title }) => (
                          <li className="border border-primary-gray px-5 py-3 sm:w-[180px] rounded-sm flex items-center gap-2 hover:bg-primary-gray/30 transition-colors">
                            <Image
                              src={icon}
                              width={18}
                              height={18}
                              alt={title}
                            />

                            <p className="text-sm capitalize text-primary-white font-medium">
                              {title}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tecnhologies.backend && (
                    <div className="flex flex-col gap-2">
                      <h1 className="text-secundary-gray font-medium uppercase tracking-wider">
                        Back-end
                      </h1>
                      <ul className="flex gap-5 xl:max-w-[400px] flex-wrap">
                        {tecnhologies.backend.map(({ icon, title }) => (
                          <li className="border border-primary-gray px-5 sm:w-[180px] py-3 rounded-sm flex items-center gap-2 hover:bg-primary-gray/30 transition-colors">
                            <Image
                              src={icon}
                              width={18}
                              height={18}
                              alt={title}
                            />

                            <p className="text-sm capitalize text-primary-white font-medium">
                              {title}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tecnhologies.other && (
                    <div className="flex flex-col gap-2">
                      <h1 className="text-secundary-gray font-medium uppercase tracking-wider">
                        Outros
                      </h1>
                      <ul className="flex gap-5 xl:max-w-[400px] flex-wrap">
                        {tecnhologies.other.map(({ icon, title }) => (
                          <li className="border border-primary-gray px-5 sm:w-[180px] py-3 rounded-sm flex items-center gap-2 hover:bg-primary-gray/30 transition-colors">
                            <Image
                              src={icon}
                              width={18}
                              height={18}
                              alt={title}
                            />

                            <p className="text-sm capitalize text-primary-white font-medium">
                              {title}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
    </main>
  )
}
