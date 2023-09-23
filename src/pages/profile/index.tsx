import DefaultLayout from "@/layouts/DefaultLayout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'

const Profile: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-24 min-h-screen">
      <div className="outline">profile</div>

      <h1>teste</h1>
    </div>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Profile