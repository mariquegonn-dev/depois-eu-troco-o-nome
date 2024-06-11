import Link from "next/link"
import { IconTooltip } from "./icon-tooltip"
import { navConfig } from "@/config/nav.config"

export const Nav = () => {
  return (
    <nav className="sm:block hidden">
      <ul className="flex items-center gap-3">
        {navConfig.map(({ href, title, Icon }) => (
          <li key={title}>
            <Link href={href}>
              <IconTooltip Icon={Icon} title={title} href={href} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
