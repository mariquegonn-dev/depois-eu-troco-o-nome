import { cn } from "@/lib/utils"
import { Nav } from "@/types/nav.type"
import Link from "next/link"

type ListProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "nav" | "socials"
  config: Nav[]
}

export const ListNav = ({ config, variant = "nav", ...props }: ListProps) => {
  return (
    <ul
      role="navigation"
      aria-label={variant === "nav" ? "main-nav-bar" : "nav-socials"}
      className={cn(
        "flex flex-col gap-2",
        variant === "nav" && "border-b border-primary-gray pb-3",
        variant === "socials" && "flex-1"
      )}
    >
      {config.map(({ href, title, Icon }) => (
        <li key={title}>
          <Link
            {...props}
            title={title}
            href={href}
            className={cn(
              "flex items-center gap-2 w-full border-l-4 border-transparent py-[6px] px-2 text-primary-white/80 hover:bg-primary-gray/50 rounded-md text-sm"
            )}
          >
            <Icon size={18} />
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
