import { X } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { HTMLAttributes } from "react"

export const NavHeaderMobile = ({
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image
          className="w-8 h-8 object-cover z-[100] rounded-full border-primary-gray border"
          width={32}
          height={32}
          alt="image profile"
          src="/profile.webp"
        />
        <div className="text-sm flex flex-col">
          <span className="text-primary-white font-medium">mariquegonn</span>
          <span className="text-secundary-gray">Henrique Gonçalves</span>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-8 h-8 hover:bg-primary-gray/50 transition-colors duration-300 rounded-md cursor-pointer"
        {...props}
        aria-label="button-close"
      >
        <X size={16} className="text-secundary-gray" weight="bold" />
      </div>
    </div>
  )
}
