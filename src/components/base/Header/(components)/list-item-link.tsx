"use client"

import { navConfig } from "@/config/nav.config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const ListItemLink = () => {
  const pathname = usePathname()
  return (
    <ul
      role="navigation"
      aria-label={`nav-list`}
      className={cn("flex gap-2 border-b border-primary-gray pb-3 flex-col")}
    >
      {navConfig.map(({ href, title, Icon }) => (
        <li key={`${title}-${href}`}>
          <Link
            href={href}
            className={cn(
              "flex items-center gap-2 w-full py-[6px] px-2 text-primary-white/80 hover:bg-primary-gray/50 rounded-md text-sm",
              (pathname === href ||
                (pathname.includes(href) && href !== "/")) &&
                "bg-primary-gray/50"
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
