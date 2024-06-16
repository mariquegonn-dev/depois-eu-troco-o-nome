import { newHref } from "@/helpers/new-href"
import { cn } from "@/lib/utils"
import { Icon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { View } from "../View/view"
import { Text } from "../Text/text"

export interface RepositoryProps {
  Icon: Icon
  title: string
  view?: "public" | "private"
  about: ReactNode
  image?: string | null
}

export const Repository = ({
  Icon,
  title,
  view,
  about,
  image,
}: RepositoryProps) => {
  return (
    <Link
      href={`/repositories/${newHref(title)}`}
      className="group border transition-all duration-300 border-primary-gray rounded-md w-full flex flex-col gap-3 hover:bg-primary-gray/30"
    >
      <div
        className={cn(
          "p-5 flex flex-col gap-3 lg:h-full",
          image ? "pb-0" : "pb-5"
        )}
      >
        <Text
          type="h2"
          variant="title-page"
          className="flex items-center gap-2"
        >
          <Icon className="text-secundary-gray" size={24} />
          <span className="underline">{title}</span>
          {view && <View>{view}</View>}
        </Text>
        <Text type="p" className="text-xs text-secundary-gray leading-[150%]">
          {about}
        </Text>
      </div>

      {image && (
        <Image
          className="h-[300px] object-cover rounded-b-md lg:flex-1"
          src={image}
          width={1000}
          height={1000}
          alt="image"
          priority
        />
      )}
    </Link>
  )
}
