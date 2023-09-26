import { ComponentProps } from "react"

interface TagProps extends ComponentProps<"button"> {
  title: string
  active: boolean
}

export function Tag({ title, active, ...rest }: TagProps) {
  return (
    <button className={`px-4 py-1 rounded-full whitespace-nowrap border border-purple-100 text-purple-100 hover:bg-purple-200
     hover:text-gray-100 transition-all duration-100 ${active ? 'bg-purple-200 text-white border-none' : ''}`} {...rest}>
      {title}
    </button>
  )
}