import { cn } from "@/lib/utils"

type CardProps = {
  variant?: "col" | "row"
  children: React.ReactNode
}

export const Card = ({ variant = "col", children }: CardProps) => {
  return (
    <div
      className={cn(
        "border border-primary-gray p-5 rounded-md flex flex-col gap-5",
        variant === "col" ? "flex-col gap-5" : "flex-row gap-2"
      )}
    >
      {children}
    </div>
  )
}
