import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 py-40 px-3 text-primary-white">
        <p className="text-5xl">🪄</p>
        <p className="text-center text-4xl font-bold">Página não encontrada</p>
        <p className="max-w-xl px-3 text-center text-secundary-gray">
          Peço desculpas por este incoveniente. A página que você está
          procurando não existe ou foi removida.
        </p>

        <Link href="/">
          <Button className="bg-transparent border-primary-gray border hover:bg-primary-purple transition-colors duration-300">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </>
  )
}
