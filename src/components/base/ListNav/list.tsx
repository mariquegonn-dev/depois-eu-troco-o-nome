import { cn } from "@/lib/utils"
import { Nav } from "@/types/nav.type"
import Link from "next/link"

type ListProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "nav" | "socials" | "main"
  config: Nav[]
}

export const ListNav = ({ config, variant = "nav", ...props }: ListProps) => {
  return (
    <ul
      aria-label={`${variant}-nav-list`}
      className={cn(
        "flex gap-2",
        variant === "nav" && "border-b border-primary-gray pb-3 flex-col",
        variant === "socials" && "flex-1 flex-col",
        variant === "main" && ""
      )}
    >
      {config.map(({ href, title, Icon }) => (
        <li key={`${title}-${href}-10`}>
          <Link
            rel={title === "Currículo" ? "noopener noreferrer" : ""}
            download={title === "Currículo" ? true : false}
            {...props}
            title={title}
            href={href}
            className={cn(
              "flex items-center gap-2 w-full py-[6px] px-2 text-primary-white/80 hover:bg-primary-gray/50 rounded-md text-sm",
              variant === "main" &&
                "border border-primary-gray hover:border-primary-gray/50"
            )}
          >
            <Icon size={variant === "main" ? 24 : 18} />
            {variant !== "main" && title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
