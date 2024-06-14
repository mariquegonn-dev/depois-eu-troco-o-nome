import { cn } from "@/lib/utils"
import Link from "next/link"

export const LinkRepositories = ({
  href,
  label,
}: {
  href?: string
  label: string
}) => {
  return (
    <Link
      href={href || ""}
      target="_blank"
      className={cn(
        "flex max-w-[200px] justify-center items-center gap-2 w-full py-[6px] px-2 text-primary-white/80 hover:text-primary-white hover:bg-primary-black/50 rounded-md border border-primary-gray transition-colors font-medium",
        !href && "cursor-not-allowed opacity-30 font-normal"
      )}
    >
      {label}
    </Link>
  )
}
