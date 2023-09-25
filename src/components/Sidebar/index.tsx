import Image from "next/image"
import logo from '@/assets/logo.svg'
import { ChartLineUp, SignIn, User } from "@phosphor-icons/react/dist/ssr"
import { Binoculars } from "@phosphor-icons/react"
import Link from "next/link"
import { NavItem } from "../NavItem"
import { useRouter } from "next/router"


export function Sidebar() {
  const isAuthenticated = true
  const { pathname } = useRouter()

  return (
    <aside className="lg:w-[14.5rem] fixed right-auto top-0 bottom-0 z-20 flex flex-col justify-between items-center pt-10 rounded-xl m-5 bg-gradient-to-bl from-purple-200/40 via-purple-200/40 to-gray-600/30">
      <div>
        <Image src={logo} alt='' width={150} className="mb-16" />

        <NavItem href='/home' active={pathname === '/home'}>
          <ChartLineUp className="w-6 h-6" />
          Início
        </NavItem>

        <NavItem href='/explore' active={pathname === '/explore'}>
          <Binoculars className="w-6 h-6" />
          Explorar
        </NavItem>

        {isAuthenticated && (
          <NavItem href='/profile' active={pathname === '/profile'}>
            <User className="w-6 h-6" />
            Perfil
          </NavItem>
        )}
      </div>


      <Link href='/' className="flex items-center gap-3 mb-6 font-bold text-gray-100 hover:text-gray-50">
        Fazer Login
        <SignIn className="w-5 h-5 text-green-100" />
      </Link>
    </aside >
  )
}