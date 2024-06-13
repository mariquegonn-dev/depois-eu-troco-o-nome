import Link from "next/link"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="text-xs font-light text-secundary-gray text-center p-5">
      © {year} · Desenvolvido por{" "}
      <Link
        href="https://wa.me/5579999199036?text=Ol%C3%A1+Henrique%21"
        target="_blank"
        className="text-primary-purple font-medium"
      >
        mariquegonn
      </Link>
    </footer>
  )
}
