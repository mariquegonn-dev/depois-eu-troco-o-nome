import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icon } from "@phosphor-icons/react"

interface IconTooltipProps {
  Icon: Icon
  title: string
}

export const IconTooltip = ({ Icon, title }: IconTooltipProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-primary-gray hover:bg-gray-500/20">
          <Icon size={18} className="text-gray-400" />
        </TooltipTrigger>

        <TooltipContent className="border-none bg-primary-gray font-light tracking-wider text-white text-xs">
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
