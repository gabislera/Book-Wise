
import DefaultLayout from "@/layouts/DefaultLayout";
import { useState, type ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Binoculars, User } from "@phosphor-icons/react";
import { SearchInput } from "@/components/SearchInput";
import { Tag } from "@/components/Tag";
import { BookCard } from "@/components/BookCard";

const categories = [
  'Computação',
  'Educação',
  'Fantasia',
  'Ficção científica',
  'Horror',
  'HQs',
  'Suspense'
]

const Explore: NextPageWithLayout = () => {
  const [selectCategory, setSelectCategory] = useState<String | null>(null)

  return (
    <section className="ouline">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Binoculars className="w-8 h-8 text-green-100 " />
          <span className="text-2xl font-bold">Explorar</span>
        </div>

        <form className="max-w-[433px] w-full">
          <SearchInput />
        </form>
      </header>

      <section className="flex gap-3 mb-12 ">
        <Tag title="Todos" active={selectCategory === null} onClick={() => setSelectCategory(null)} />
        {categories.map(item => (
          <Tag key={item} title={item} active={selectCategory === item} onClick={() => setSelectCategory(item)} />
        ))}
      </section>

      <main className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </main>
    </section>
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