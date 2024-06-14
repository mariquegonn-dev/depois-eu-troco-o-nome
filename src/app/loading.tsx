import { Spinner } from "@phosphor-icons/react/dist/ssr"

export default function Loading() {
  return (
    <div className="absolute left-0 right-0 top-0 bg-primary-black pt-[200px] backdrop-blur-[8px] bottom-0 lg:pt-[400px] h-screen">
      <div
        className="mx-auto flex max-w-max items-center gap-1"
        aria-label="loading"
      >
        <Spinner size={24} className="animate-spin text-primary-white" />
        <p className="text-x5 font-semibold text-primary-white">
          mariquegonn's portfolio
        </p>
      </div>
    </div>
  )
}
