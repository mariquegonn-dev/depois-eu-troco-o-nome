"use client"

import { navConfig } from "@/config/nav.config"
import Link from "next/link"
import { IconTooltip } from "./icon-tooltip"
import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { socialsConfig } from "@/config/socials.config"

export const NavMobile = () => {
  const [open, setOpen] = useState(false)

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

      <nav
        className={cn(
          "content absolute left-14 rounded-l-xl right-0 top-0 z-[10000] translate-x-[200%] bg-tertiary-black opacity-0 transition-all duration-500 border-l border-primary-gray",
          open && "translate-x-0 opacity-100"
        )}
      >
        {open && (
          <div className="p-4 flex flex-col gap-3 h-[100dvh]">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-8 h-8 object-cover rounded-full border-primary-gray border"
                  width={32}
                  height={32}
                  alt="image profile"
                  src="/profile.webp"
                />
                <div className="text-sm flex flex-col">
                  <span className="text-primary-white font-medium">
                    mariquegonn
                  </span>
                  <span className="text-secundary-gray">
                    Henrique Gonçalves
                  </span>
                </div>
              </div>

              <div
                className="flex justify-center items-center w-8 h-8 hover:bg-primary-gray/50 transition-colors duration-300 rounded-md cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="button-close"
              >
                <X size={16} className="text-secundary-gray" weight="bold" />
              </div>
            </div>

            <p className="px-2 text-primary-white text-sm border-b pb-3 border-primary-gray">
              👽 Apenas, busquem conhecimento.
            </p>

            <ul
              role="navigation"
              aria-label="header-nav-mobile"
              className="flex flex-col gap-2 border-b border-primary-gray pb-3"
            >
              {navConfig.map(({ href, title, Icon }) => (
                <li key={title}>
                  <Link
                    title={title}
                    href={href}
                    className={cn(
                      "flex items-center gap-2 w-full border-l-4 border-transparent py-[6px] px-2 text-primary-white/80 hover:bg-primary-gray/50 rounded-md text-sm"
                    )}
                  >
                    <Icon size={18} className="" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul
              role="navigation"
              aria-label="header-nav-mobile"
              className="flex flex-col gap-2 flex-1"
            >
              {socialsConfig.map(({ href, title, Icon }) => (
                <li key={href}>
                  <Link
                    title={title}
                    href={href}
                    target="_blank"
                    className={cn(
                      "flex items-center gap-2 w-full border-l-4 border-transparent py-[6px] px-2 text-primary-white/80 hover:bg-primary-gray/50 rounded-md text-sm"
                    )}
                  >
                    <Icon size={18} />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center text-xs text-secundary-gray cursor-default">
              Frontend Developer
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
