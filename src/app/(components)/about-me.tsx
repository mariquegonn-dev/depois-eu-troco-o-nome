import { Card } from "@/components/base/Card/card"
import { ListNav } from "@/components/base/ListNav/list"
import { Separator } from "@/components/base/Separator/separator"
import { Text } from "@/components/base/Text/text"
import { aboutMeConfig } from "@/config/about-me.config"
import { socialsConfig } from "@/config/socials.config"

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="title-page" type="h1">
        Sobre mim
      </Text>
      <Card>
        <Text type="h1" variant="xl" className="flex flex-col gap-1">
          Olá, Mundo!
          <Separator />
        </Text>

        {aboutMeConfig.map(({ description }) => (
          <Text
            type="p"
            className="text-primary-white text-base"
            key={description.toString()}
          >
            {description}
          </Text>
        ))}

        <ListNav variant="main" config={socialsConfig} target="_blank" />
      </Card>
    </div>
  )
}
