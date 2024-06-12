"use client"

import { cn } from "@/lib/utils"
import { PushPin } from "@phosphor-icons/react"
import { usePathname } from "next/navigation"

export default function ActiveLink({ href }: { href: string }) {
  const pathname = usePathname()

  return (
    <PushPin
      className={cn(
        "absolute -top-1 -right-1 text-transparent",
        pathname === href && "text-primary-purple",
        pathname.includes(href) && href !== "/" && "text-primary-purple"
      )}
      size={12}
      weight="fill"
    />
  )
}
