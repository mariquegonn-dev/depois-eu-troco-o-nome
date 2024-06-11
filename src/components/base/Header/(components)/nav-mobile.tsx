"use client"

import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { socialsConfig } from "@/config/socials.config"
import { useParams, usePathname } from "next/navigation"
import { navConfig } from "@/config/nav.config"
import { ListNav } from "../../ListNav/list"
import { NavHeaderMobile } from "./nav-header-mobile"

export const NavMobile = () => {
  const [hash, setHash] = useState("")
  const [open, setOpen] = useState(false)
  const params = useParams()
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      const getHash = window.location.hash
      setHash(getHash)
      setOpen(false)
    }
  }, [params, hash])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const content = document.querySelector(".content")
      if (!content?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <>
      <div className="sm:hidden block">
        {!open ? (
          <List
            aria-label="button-open"
            size={24}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        ) : (
          <X size={16} className="text-secundary-gray" weight="bold" />
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-[1000] bg-black opacity-50"></div>
      )}
      <nav
        className={cn(
          "content absolute left-14 rounded-l-xl right-0 top-0 z-[10000] translate-x-[200%] bg-tertiary-black opacity-0 transition-all duration-500 border-l border-primary-gray",
          open && "translate-x-0 opacity-100"
        )}
      >
        {open && (
          <div className="p-4 flex flex-col gap-3 h-[100dvh]">
            <NavHeaderMobile onClick={() => setOpen(false)} />

            <p className="px-2 text-primary-white text-sm border-b pb-3 border-primary-gray">
              👽 Apenas, busquem conhecimento.
            </p>

            <ListNav
              variant="nav"
              config={navConfig}
              onClick={() => {
                if (pathname === "/") setOpen(false)
              }}
            />

            <ListNav variant="socials" config={socialsConfig} target="_blank" />

            <p className="text-center text-xs text-secundary-gray cursor-default">
              Frontend Developer
            </p>
          </div>
        )}
      </nav>
    </>
  )
}
