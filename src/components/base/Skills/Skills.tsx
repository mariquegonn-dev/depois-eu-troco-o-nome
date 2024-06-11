import Link from "next/link"
import { ReactNode } from "react"

export interface RepositorieProps {
  title: string
  about: ReactNode
  src: ReactNode
}

export const Skills = ({ src, title, about }: RepositorieProps) => {
  return (
    <Link
      href="/skills"
      className="border border-primary-gray p-5 rounded-md w-full flex items-center gap-3 hover:bg-primary-gray/30 transition-colors"
    >
      {src}
      <div>
        <p className="text-lg capitalize text-primary-white font-medium">
          {title}
        </p>
        <p className="text-sm text-secundary-gray">{about}</p>
      </div>
    </Link>
  )
}
