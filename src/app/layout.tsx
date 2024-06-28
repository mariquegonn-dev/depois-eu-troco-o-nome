import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/base/Header/header"
import { cn } from "@/lib/utils"
import { SideBar } from "@/components/base/Sidebar/sidebar"
import { Footer } from "@/components/base/Footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MariqueGonn's Portfolio",
  description:
    "Portfolio de Henrique Gonçalves, desenvolvedor front-end, estudante de Analise e Desenvolvimento de Sistemas e apaixonado por tecnologia.",
  metadataBase: new URL("https://www.mariquegonn.live/"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      url: "/logo.png",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MariqueGonn - Portfolio",
    title: "MariqueGonn - Portfolio - Home",
    description:
      "Portfolio de Henrique Gonçalves, desenvolvedor front-end, estudante de Analise e Desenvolvimento de Sistemas e apaixonado por tecnologia.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "MariqueGonn - Portfolio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={(cn(inter.className), "bg-secundary-black scroll-smooth")}
      >
        <Header />
        <div className="gap-5 max-w-7xl pt-24 mx-auto text-white grid md:grid-cols-[288px_1fr] grid-cols-1 p-5">
          <div className="md:block hidden">
            <SideBar />
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
