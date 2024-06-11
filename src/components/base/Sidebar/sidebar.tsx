import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import { SkillsSideBar } from "./(components)/skills-side-bar"

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
]

export const SideBar = () => {
  return (
    <div className="flex flex-col gap-5 max-w-72">
      <Image
        className="w-72 h-72 rounded-full border-2 border-primary-gray"
        src="/profile.webp"
        width={318}
        height={333.12}
        alt="profile-image"
      />

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-primary-white flex flex-col">
          Henrique Gonçalves
          <span className="text-xl text-secundary-gray lowercase font-light">
            MariqueGonn
          </span>
        </h1>
        <p className="text-base text-primary-white font-light">
          Frontend Developer
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {infoSideBarConfig.map(({ Icon, title, href }) => (
          <li className="text-primary-white flex gap-2 items-center text-sm">
            <Icon size={20} className="text-secundary-gray font-light" />
            {href ? (
              <Link
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

      <span className="w-full h-[1px] bg-primary-gray"></span>

      <SkillsSideBar />

      <span className="w-full h-[1px] bg-primary-gray"></span>

      <div className="flex flex-col gap-5">
        <h1 className="font-medium capitalize">Organização Atual</h1>
        <Link
          className="flex items-center gap-2 w-max"
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
