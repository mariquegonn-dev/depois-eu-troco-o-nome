import { cn } from "@/lib/utils"
import { Icon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { ClassNameValue } from "tailwind-merge"

export interface RepositorieProps {
  href?: boolean
  Icon?: Icon
  title: string
  about: ReactNode
  view?: "public" | "private"
  className?: ClassNameValue
  src?: ReactNode
  skills?: string[]
  image?: string
}

export const Repository = ({
  src,
  Icon,
  href,
  title,
  about,
  view,
  className,
  image,
  skills,
}: RepositorieProps) => {
  const newHref = (title: string) => {
    const href = title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]/g, "-")
      .toLowerCase()
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
    return href
  }
  return (
    <Link
      href={href ? `/repositories/${newHref(title)}` : "/skills"}
      className={cn(
        "group border transition-all duration-300 border-primary-gray rounded-md w-full flex flex-col gap-3 hover:bg-primary-gray/30",
        className
      )}
    >
      <div className="p-5 pb-0 flex flex-col gap-3 h-full">
        <p className="flex items-center gap-2 text-sm text-primary-white">
          {src
            ? src
            : Icon && <Icon className="text-secundary-gray" size={24} />}
          <span className="underline">{title}</span>{" "}
          {view && (
            <span className="capitalize text-xs text-secundary-gray border border-primary-gray px-2 py-[2px] rounded-full">
              {view}
            </span>
          )}
        </p>
        <p className="text-xs text-secundary-gray leading-[150%]">{about}</p>
      </div>

      {skills && (
        <ul className="flex gap-2 px-5 flex-wrap">
          {skills.map((item) => (
            <li key={item}>
              <p className="text-xs text-secundary-gray underline">{item}</p>
            </li>
          ))}
        </ul>
      )}

      {image && (
        <Image
          className="h-[200px] object-cover opacity-90 max-w-full group-hover:opacity-100 rounded-b-md"
          src={image}
          width={1000}
          height={1000}
          alt="image"
        />
      )}
    </Link>
  )
}
