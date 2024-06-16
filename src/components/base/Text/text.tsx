import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"

type TextProps = {
  type?: "h1" | "h2" | "p" | "span"
  variant?: "title-page" | "xl"
  className?: ClassNameValue
  children: React.ReactNode
}

export const Text = ({
  type = "p",
  variant,
  className,
  children,
}: TextProps) => {
  const style =
    (variant === "title-page" &&
      "text-sm font-medium text-secundary-gray tracking-wider") ||
    (variant === "xl" && "font-medium text-xl")
  if (type === "h1")
    return <h1 className={cn(style || "", className)}>{children}</h1>
  if (type === "h2")
    return <h2 className={cn(style || "", className)}>{children}</h2>
  if (type === "span")
    return <span className={cn(style || "", className)}>{children}</span>
  return <p className={cn(style || "", className)}>{children}</p>
}
