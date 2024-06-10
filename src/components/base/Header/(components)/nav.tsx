import { navConfig } from "@/config/nav.config"
import Link from "next/link"
import { IconTooltip } from "./icon-tooltip"

export const Nav = () => {
  return (
    <nav className="sm:block hidden">
      <ul className="flex items-center gap-3">
        {navConfig.map(({ href, title, Icon }) => (
          <li key={title}>
            <Link href={href}>
              <IconTooltip Icon={Icon} title={title} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
