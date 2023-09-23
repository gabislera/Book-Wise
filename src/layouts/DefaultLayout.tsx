import { Sidebar } from "@/components/Sidebar"
import { ReactNode } from "react"

type DefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="grid grid-cols-2 gap-24 min-h-screen outline">
      <Sidebar />

      <main className="outline">
        {children}
      </main>
    </div>
  )
}