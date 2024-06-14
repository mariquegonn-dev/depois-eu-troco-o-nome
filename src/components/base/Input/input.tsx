import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
}

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="relative w-full -z-20">
      <input
        {...props}
        id={id}
        className="z-[10] block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-secundary-gray/30 focus:outline-none focus:ring-0 peer bg-transparent focus:border-primary-purple"
        placeholder=" "
      />

      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secundary-black dark:bg-gray-900 px-2 peer-focus:px-4 peer-focus:text-primary-purple peer-focus:dark:text-primary-purple peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  )
}
