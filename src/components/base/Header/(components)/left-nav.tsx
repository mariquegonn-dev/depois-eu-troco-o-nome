import { GithubLogo } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export const LeftNav = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://github.com/mariquegonn-dev"
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 hover:bg-gray-500/20"
        aria-label="Logo do Github, link para o github do mariquegonn-dev"
      >
        <GithubLogo size={18} className="text-white" weight="fill" />
      </Link>
      <Link className="text-sm font-medium" href="/">
        mariquegonn
      </Link>
    </div>
  )
}
