import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icon } from "@phosphor-icons/react"
import dynamic from "next/dynamic"

const ActiveLink = dynamic(() => import("./active-link"), {
  ssr: false,
})

interface IconTooltipProps {
  Icon: Icon
  title: string
  href: string
}

export const IconTooltip = ({ Icon, title, href }: IconTooltipProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-primary-gray hover:bg-gray-500/20 relative">
          <Icon size={18} className="text-gray-400" />
          <ActiveLink href={href} />
        </TooltipTrigger>

        <TooltipContent className="border-none bg-primary-gray font-light tracking-wider text-white text-xs">
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
