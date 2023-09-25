import DefaultLayout from "@/layouts/DefaultLayout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Bookmark, Books, User, UserList } from "@phosphor-icons/react";
import * as Avatar from '@radix-ui/react-avatar'
import { BookOpen } from "@phosphor-icons/react/dist/ssr";
import { UserRatingCard } from "@/components/UserRatingCard";
import { SearchInput } from "@/components/SearchInput";

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <User className="w-8 h-8 text-green-100" />
        <span className="text-2xl font-bold">Perfil</span>
      </div>

      <section className="grid grid-cols-home ">
        <main>
          <form className="max-w-[608px] ">
            <SearchInput />
          </form>

          <div >
            <UserRatingCard />
            <UserRatingCard />
            <UserRatingCard />
          </div>
        </main>

        <aside className="col-start-2">
          <div className="fixed left-auto flex flex-col items-center border-l border-gray-700">
            <div className="flex flex-col items-center mb-8">
              <Avatar.Root className="inline-flex h-[72px] w-[72px] mb-5 select-none overflow-hidden rounded-full bg-gray-500 border border-green-200">
                <Avatar.Image src="https://github.com/gabislera.png" />
                <Avatar.Fallback delayMs={600} className="leading-1 flex h-full w-full items-center justify-center text-sm">GC</Avatar.Fallback>
              </Avatar.Root>
              <strong className="text-xl text-gray-200">Gabriela</strong>
              <span className='text-gray-400 text-sm'>Membro desde 2019</span>
            </div>

            <span className='w-8 h-1 rounded-full mb-8  bg-green-100' />

            <div className=" w-full flex flex-col gap-10 px-14">
              <div className="flex items-center justify-start gap-5">
                <BookOpen className="w-8 h-8 text-green-100" />
                <div className="flex flex-col">
                  <strong className="text-gray-200">3853</strong>
                  <span className="text-sm text-gray-300">Páginas lidas</span>
                </div>
              </div>

              <div className="flex items-center justify-start gap-5">
                <Books className="w-8 h-8 text-green-100" />
                <div className="flex flex-col">
                  <strong className="text-gray-200">10</strong>
                  <span className="text-sm text-gray-300">Livros avaliados</span>
                </div>
              </div>

              <div className="flex items-center justify-start gap-5">
                <UserList className="w-8 h-8 text-green-100" />
                <div className="flex flex-col">
                  <strong className="text-gray-200">8</strong>
                  <span className="text-sm text-gray-300">Autores lidos</span>
                </div>
              </div>

              <div className="flex items-center justify-start gap-5">
                <Bookmark className="w-8 h-8 text-green-100" />
                <div className="flex flex-col">
                  <strong className="text-gray-200">Computação</strong>
                  <span className="text-sm text-gray-300">Categoria mais lida</span>
                </div>
              </div>
            </div>
          </div>

        </aside>
      </section>
    </>
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