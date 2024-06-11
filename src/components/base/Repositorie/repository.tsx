import { cn } from "@/lib/utils"
import { Icon } from "@phosphor-icons/react"
import Link from "next/link"
import { ReactNode } from "react"
import { ClassNameValue } from "tailwind-merge"

export interface RepositorieProps {
  href?: string
  Icon?: Icon
  title: string
  about: ReactNode
  view?: "public" | "private"
  className?: ClassNameValue
  src?: ReactNode
}

export const Repository = ({
  src,
  Icon,
  href,
  title,
  about,
  view,
  className,
}: RepositorieProps) => {
  return (
    <Link
      href={href ? href : "/skills"}
      className={cn(
        "border border-primary-gray p-5 rounded-md w-full flex flex-col gap-3 hover:bg-primary-gray/30 transition-colors",
        className
      )}
    >
      <p className="flex items-center gap-2 text-sm text-primary-white">
        {src ? src : Icon && <Icon className="text-secundary-gray" size={24} />}
        <span className="underline">{title}</span>{" "}
        {view && (
          <span className="capitalize text-xs text-secundary-gray border border-primary-gray px-2 py-[2px] rounded-full">
            {view}
          </span>
        )}
      </p>
      <p className="text-xs text-secundary-gray leading-[150%]">{about}</p>
    </Link>
  )
}
