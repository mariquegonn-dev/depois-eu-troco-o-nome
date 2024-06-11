"use client"

import { cn } from "@/lib/utils"
import { PushPin } from "@phosphor-icons/react"
import { useParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function ActiveLink({ href }: { href: string }) {
  const [hash, setHash] = useState("")
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {
    const getHash = window.location.hash
    setHash(getHash)
  }, [params])

  return (
    <PushPin
      className={cn(
        "absolute -top-1 -right-1 text-transparent",
        pathname === href && !hash && "text-primary-purple",
        pathname.includes(href) &&
          href !== "/" &&
          !hash &&
          "text-primary-purple",
        href === `${pathname}${hash}` && "text-primary-purple"
      )}
      size={12}
      weight="fill"
    />
  )
}
