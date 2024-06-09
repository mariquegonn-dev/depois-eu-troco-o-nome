import { Nav } from '@/types/nav.type'
import {
  BookBookmark,
  BookOpen,
  House,
  WechatLogo,
} from '@phosphor-icons/react/dist/ssr'

export const navConfig: Nav[] = [
  {
    title: 'Início',
    href: '/',
    Icon: House,
  },
  {
    title: 'Sobre',
    href: '#about',
    Icon: BookOpen,
  },
  {
    title: 'Repositórios',
    href: '/repositories',
    Icon: BookBookmark,
  },
  {
    title: 'Contato',
    href: '/contact',
    Icon: WechatLogo,
  },
]
