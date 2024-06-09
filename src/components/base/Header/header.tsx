import { navConfig } from '@/config/nav.config'
import Link from 'next/link'
import { IconTooltip } from './(components)/icon-tooltip'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 border-b border-gray-600 bg-[#02060D]">
      <div className="mx-auto flex items-center justify-between p-4 text-white">
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/mariquegonn-dev"
            target="_blank"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 hover:bg-gray-500/20"
          >
            <GithubLogo size={18} className="text-white" weight="fill" />
          </Link>
          <Link className="text-sm font-medium" href="/">
            mariquegonn
          </Link>
        </div>
        <ul className="flex items-center gap-3">
          {navConfig.map(({ href, title, Icon }) => (
            <li key={title}>
              <Link href={href}>
                <IconTooltip Icon={Icon} title={title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
