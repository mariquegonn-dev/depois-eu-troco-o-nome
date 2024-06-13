import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/base/Header/header"
import { cn } from "@/lib/utils"
import { SideBar } from "@/components/base/Sidebar/sidebar"
import { headers } from "next/headers"
import { Footer } from "@/components/base/Footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MariqueGonn's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={(cn(inter.className), "bg-secundary-black")}>
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
