import { Sidebar } from "@/components/Sidebar"
import { ReactNode } from "react"

type DefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="grid grid-cols-app gap-24 min-h-screen">
      <Sidebar />

      <main className="lg:col-start-2 max-w-[63.375rem] mt-[4.5rem]">
        {children}
      </main>
    </div>
  )
}