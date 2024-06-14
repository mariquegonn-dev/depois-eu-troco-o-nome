"use client"

import Link from "next/link"
import { IconTooltip } from "./icon-tooltip"
import { navConfig } from "@/config/nav.config"

export const Nav = () => {
  return (
    <nav className="sm:block hidden">
      <ul className="flex items-center gap-3">
        {navConfig.map(({ href, title, Icon }) => (
          <li key={`${href}-${title}-1`}>
            <Link href={href}>
              <IconTooltip
                Icon={Icon}
                content={title}
                href={href}
                title={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
