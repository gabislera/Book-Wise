import { ReactNode, ComponentProps } from "react";

import Link from "next/link";
import { text } from "stream/consumers";

interface NavItemProps extends ComponentProps<typeof Link> {
  children: ReactNode
  active: boolean

}

export function NavItem({ children, active, ...rest }: NavItemProps) {
  return (
    <Link className={`flex items-center gap-3 mb-4 text-gray-400 hover:text-gray-100 
    ${active ? 'text-gray-100 font-bold' : 'text-gray-400'}`
    }
      {...rest}
    >
      <span className={`w-1 h-6 rounded-full bg-white ${active ? 'opacity-1' : 'opacity-0'}`} />
      {children}
    </Link>
  )
}