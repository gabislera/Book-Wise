import { BookCard } from "@/components/BookCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { ChartLineUp } from "@phosphor-icons/react";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex items-center gap-3 mb-10">
        <ChartLineUp className="w-8 h-8 text-green-100" />
        <span className="text-2xl font-bold">Início</span>
      </div>

      <section className="grid grid-cols-home ">
        <main >
          <h2 className="text-sm mb-4">Avaliações mais recentes</h2>
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

        <aside className="col-start-2  ">
          <div className="fixed left-auto">

            <div className="flex justify-between text-sm mb-4">
              <h2>Livros populares</h2>
              <span>Ver todos</span>
            </div>

            <div className="w-[324px] h-[130px] bg-gray-700 rounded-lg mb-5"></div>
            <div className="w-[324px] h-[130px] bg-gray-700 rounded-lg mb-5"></div>
            <div className="w-[324px] h-[130px] bg-gray-700 rounded-lg mb-5"></div>
          </div>
        </aside>
      </section>
    </DefaultLayout>
  )
}