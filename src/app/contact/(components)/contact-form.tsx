"use client"

import { Input } from "@/components/base/Input/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CloudX, Code, SealCheck } from "@phosphor-icons/react"
import Link from "next/link"
import { useFormState } from "react-dom"

type Props = {
  formAction: (state: any, formData: FormData) => Promise<any>
}

export const ContactForm = ({ formAction }: Props) => {
  const [state, action] = useFormState(formAction, { error: null })

  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="flex sm:flex-row flex-col gap-5 w-full">
        <Input type="text" id="name" name="name" label="Nome" required />
        <Input type="email" id="email" name="email" label="E-mail" required />
      </div>
      <textarea
        id="message"
        name="message"
        className="min-h-[300px] w-full rounded bg-zinc-900 p-4 border-transparent border outline-none focus:border-primary-purple focus:outline-none focus:ring-0"
        placeholder="Digite aqui sua mensagem"
        required
      />
      <Button className="bg-transparent border border-secundary-gray/30 hover:bg-primary-gray/30">
        Enviar
      </Button>
      {state.error && (
        <Alert variant="destructive" className="text-red-300 border-red-400">
          <CloudX className="text-red-300" size={20} />
          <AlertTitle>Ops.. Aconteceu um imprevisto.</AlertTitle>
          <AlertDescription className="text-sm">
            Por favor, tente novamente, ou,{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://wa.me/5579999199036?text=Ol%C3%A1+Henrique%21"
            >
              me chame no whatsapp
            </Link>
          </AlertDescription>
        </Alert>
      )}
      {state.success && (
        <Alert>
          <SealCheck size={18} />
          <AlertTitle>Aeeh! Obrigado por me contatar!</AlertTitle>
          <AlertDescription className="text-sm">
            Logo entrarei em contato, porém, se for urgente,{" "}
            <Link
              className="underline text-green-400"
              target="_blank"
              href="https://wa.me/5579999199036?text=Ol%C3%A1+Henrique%21"
            >
              me chame no whatsapp
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </form>
  )
}
