"use client"

import { Nav } from "@/types/nav.type"
import { BookBookmark, Code, House, WechatLogo } from "@phosphor-icons/react"

export const navConfig: Nav[] = [
  {
    title: "Início",
    href: "/",
    Icon: House,
  },
  {
    title: "Conhecimentos",
    href: "/skills",
    Icon: Code,
  },
  {
    title: "Repositórios",
    href: "/repositories",
    Icon: BookBookmark,
  },
  {
    title: "Contato",
    href: "/contact",
    Icon: WechatLogo,
  },
]
