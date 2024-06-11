import { Spinner } from "@phosphor-icons/react/dist/ssr"

export default function Loading() {
  return (
    <div className="absolute left-0 right-0 top-0 bg-white pt-[200px] backdrop-blur-[8px] lg:bottom-0 lg:pt-[400px]">
      <div
        className="mx-auto flex max-w-max items-center gap-1"
        aria-label="loading"
      >
        <Spinner size={24} className="animate-spin" />
        <p className="text-x5 font-semibold">mariquegonn's portfolio</p>
      </div>
    </div>
  )
}
