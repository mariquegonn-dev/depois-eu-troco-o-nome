import { ReactNode } from "react"

export const View = ({ children }: { children: ReactNode }) => {
  return (
    <span className="capitalize text-xs text-secundary-gray border border-primary-gray px-2 py-[2px] rounded-full">
      {children}
    </span>
  )
}
