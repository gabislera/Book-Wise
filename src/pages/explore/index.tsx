
import DefaultLayout from "@/layouts/DefaultLayout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'

const Explore: NextPageWithLayout = () => {
  return (
    <div className="h-[3000px] bg-gray-700 flex flex-col outline">
      <div>teste</div>
      <main className="">
        oiiii
      </main>
      <h1>oi</h1>
    </div>
  )
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Explore