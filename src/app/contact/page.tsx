import { contactFormSubmit } from "@/services/actions"
import { ContactForm } from "./(components)/contact-form"
import { ListNav } from "@/components/base/ListNav/list"
import { socialsConfig } from "@/config/socials.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MariqueGonn's Portfolio - Contato",
}

export default function Contact() {
  return (
    <main className="animate-slide-left">
      <p className="mb-2 text-sm font-medium text-secundary-gray tracking-wider capitalize">
        Contato
      </p>
      <ContactForm formAction={contactFormSubmit} />
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <p className="text-secundary-gray">ou</p>
        <ListNav variant="main" config={socialsConfig} target="_blank" />
      </div>
    </main>
  )
}
