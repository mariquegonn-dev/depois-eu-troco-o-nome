"use client"

import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

export const PreviousUrl = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="w-max py-2 flex items-center gap-1 hover:gap-2 transition-all hover:text-primary-purple font-medium text-secundary-gray"
    >
      <ArrowLeft size={20} /> Voltar
    </button>
  )
}
