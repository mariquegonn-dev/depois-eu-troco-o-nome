import { skillsConfig } from "@/config/skills-sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { Medal } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

export const SkillsSideBar = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-medium capitalize">Principais tecnologias</h1>
      <ul className="flex gap-3 items-center">
        {skillsConfig.map(({ icon, description, expertise, title }) => (
          <li key={`skills-${title}`}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Image src={icon} width={64} height={64} alt={title} />
                </TooltipTrigger>

                <TooltipContent className="p-0 border-none max-w-80 bg-primary-gray font-light tracking-wider text-white text-xs">
                  <div
                    className={cn(
                      "p-5 flex justify-center items-center",
                      title === "Next.js" ? "bg-purple-400" : "bg-primary-white"
                    )}
                  >
                    <Image src={icon} width={128} height={128} alt={title} />
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-lg font-medium">{title}</h2>
                      <p className="text-sm">{description}</p>
                    </div>

                    <span className="w-full h-[1px] bg-secundary-gray"></span>

                    <div className="flex items-center gap-1">
                      <Medal size={16} />
                      <span className="text-xs text-primary-white">
                        {expertise}
                      </span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  )
}
