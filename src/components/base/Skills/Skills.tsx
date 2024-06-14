import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export interface SkillsProps {
  title: string
  about: ReactNode
  Icon: string
}

export const Skills = ({ title, about, Icon }: SkillsProps) => {
  return (
    <Link
      href="/skills"
      className="border border-primary-gray p-5 rounded-md w-full flex items-center gap-3 hover:bg-primary-gray/30 transition-colors"
    >
      <Image src={Icon} width={36} height={36} alt={title} />

      <div>
        <p className="text-lg capitalize text-primary-white font-medium">
          {title}
        </p>
        <p className="text-sm text-secundary-gray">{about}</p>
      </div>
    </Link>
  )
}
