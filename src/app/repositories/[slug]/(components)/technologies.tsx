import { tecnhologiesItem } from "@/config/slug-repository.config"
import Image from "next/image"

interface TechnologiesProps {
  label: string
  config: tecnhologiesItem[]
}

export const Technologies = ({ label, config }: TechnologiesProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-secundary-gray font-medium uppercase tracking-wider">
        {label}
      </h1>
      <ul className="flex gap-5 xl:max-w-[400px] flex-wrap">
        {config.map(({ icon, title }) => (
          <li
            key={`${icon}-${title}`}
            className="border border-primary-gray px-5 py-3 rounded-sm sm:w-[180px] flex items-center gap-2 hover:bg-primary-gray/30 transition-colors"
          >
            <Image src={icon} width={18} height={18} alt={title} />

            <p className="text-sm capitalize text-primary-white font-medium">
              {title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
