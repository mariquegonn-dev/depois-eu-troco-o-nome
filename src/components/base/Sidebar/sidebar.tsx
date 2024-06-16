import {
  Envelope,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import { SkillsSideBar } from "./(components)/skills-side-bar"
import { Separator } from "../Separator/separator"
import { Text } from "../Text/text"

const infoSideBarConfig = [
  { Icon: MapPin, title: "Aracaju/SE - Brazil" },
  {
    Icon: LinkedinLogo,
    title: "/in/mariquegonn-dev",
    href: "https://www.linkedin.com/in/mariquegonn-dev/",
  },
  {
    Icon: GithubLogo,
    title: "/mariquegonn-dev",
    href: "https://github.com/mariquegonn-dev",
  },
  {
    Icon: Envelope,
    title: "mariquegonn@gmail.com",
    href: "mailto:mariquegonn@gmail.com",
  },
  {
    Icon: WhatsappLogo,
    title: "Whatsapp",
    href: "https://wa.me/5579999199036?text=Ol%C3%A1+Henrique%21",
  },
  {
    Icon: FilePdf,
    title: "Currículo",
    href: "/curriculo.pdf",
  },
]

export const SideBar = () => {
  return (
    <div className="flex flex-col gap-5 md:max-w-72">
      <div className="flex flex-row md:flex-col gap-5 items-center md:items-start">
        <Image
          className="object-cover md:w-72 md:h-72 w-32 h-32 rounded-full border-2 border-primary-gray"
          src="/profile.webp"
          width={288}
          height={288}
          alt="profile-image"
          priority
        />

        <Text
          type="h1"
          className="text-2xl font-semibold text-primary-white flex flex-col"
        >
          Henrique Gonçalves
          <Text
            type="span"
            className="text-xl text-secundary-gray lowercase font-light"
          >
            MariqueGonn
          </Text>
        </Text>
      </div>

      <div className="flex items-center justify-between">
        <Text type="h1" className="text-base text-primary-white font-light">
          Frontend Developer
        </Text>

        <Link
          href="/contact"
          className="text-xs text-green-500 bg-green-700/10 hover:bg-green-700/20 px-4 rounded-md py-2 flex items-center gap-2 w-max font-medium tracking-wide"
        >
          <span className="w-2 h-2 block bg-green-500 rounded-full"></span>Open
          to work
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        {infoSideBarConfig.map(({ Icon, title, href }) => (
          <li
            className="text-primary-white flex gap-2 items-center text-sm"
            key={`info-side-bar-${title}-22`}
          >
            <Icon size={20} className="text-secundary-gray font-light" />
            {href ? (
              <Link
                download={title === "Currículo" ? true : false}
                target="_blank"
                href={href}
                className="underline hover:text-primary-purple"
              >
                {title}
              </Link>
            ) : (
              <span>{title}</span>
            )}
          </li>
        ))}
      </ul>

      <Separator />

      <SkillsSideBar />

      <Separator />

      <div className="flex flex-col gap-5">
        <h1 className="font-medium capitalize">Organização Atual</h1>
        <Link
          className="flex items-center gap-2 w-max hover:text-primary-purple"
          href="https://www.linkedin.com/company/newsun-energy-group/"
          target="_blank"
        >
          <Image
            src="/newsun.jpg"
            width={200}
            height={200}
            className="w-8 h-8 rounded-md"
            alt="newsun-energy-group-logo"
          />
          <span className="text-sm underline">NewSun Energy Group</span>
        </Link>
      </div>
    </div>
  )
}
