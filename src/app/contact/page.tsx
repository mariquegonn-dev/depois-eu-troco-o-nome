import { contactFormSubmit } from "@/services/actions"
import { ContactForm } from "./(components)/contact-form"
import { ListNav } from "@/components/base/ListNav/list"
import { socialsConfig } from "@/config/socials.config"
import { Metadata } from "next"
import { Text } from "@/components/base/Text/text"
import { Section } from "@/components/base/Main/main"

export const metadata: Metadata = {
  title: "MariqueGonn's Portfolio - Contato",
}

export default function Contact() {
  return (
    <Section>
      <Text type="h1" variant="title-page">
        Contato
      </Text>

      <ContactForm formAction={contactFormSubmit} />

      <div className="flex flex-col justify-center items-center gap-5 mt-3">
        <Text type="span" className="text-secundary-gray">
          ou
        </Text>
        <ListNav variant="main" config={socialsConfig} target="_blank" />
      </div>
    </Section>
  )
}
