import { cn } from "@/lib/utils"

type SectionProps = {
  variant?: "home" | "other"
  type?: "main" | "section" | "div"
  children: React.ReactNode
}

export const Section = ({
  variant = "other",
  type = "main",
  children,
}: SectionProps) => {
  const styles = "w-full flex flex-col animate-slide-left"
  if (type === "section")
    return (
      <section
        className={cn(
          styles,
          variant === "home" ? "gap-5 md:mt-0 mt-5" : "gap-2"
        )}
      >
        {children}
      </section>
    )

  if (type === "div")
    <div
      className={cn(
        styles,
        variant === "home" ? "gap-5 md:mt-0 mt-5" : "gap-2"
      )}
    >
      {children}
    </div>

  return (
    <main
      className={cn(
        styles,
        variant === "home" ? "gap-5 md:mt-0 mt-5" : "gap-2"
      )}
    >
      {children}
    </main>
  )
}
