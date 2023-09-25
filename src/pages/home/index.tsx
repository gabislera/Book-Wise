import { RatingCard } from "@/components/RatingCard";
import { LastReadCard } from "@/components/LastReadCard";
import { TrendingBookCard } from "@/components/TrendingBookCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { ChartLineUp } from "@phosphor-icons/react";

export default function Home() {
  const isAuthenticated = true

  return (
    <DefaultLayout>
      <div className="flex items-center gap-3 mb-10">
        <ChartLineUp className="w-8 h-8 text-green-100" />
        <span className="text-2xl font-bold">Início</span>
      </div>

      <section className="grid grid-cols-home ">
        <main>
          {isAuthenticated && (
            <div className="max-w-[608px]">
              <div className="flex justify-between">
                <h2 className="text-sm mb-4">Sua última leitura</h2>
                <a href="">Ver todas</a>
              </div>
              <LastReadCard />
            </div>
          )}

          <div >
            <h2 className="text-sm mb-4">Avaliações mais recentes</h2>
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
        </main>

        <aside className="col-start-2 ">
          <div className="fixed left-auto">
            <div className="flex justify-between text-sm mb-4">
              <h2>Livros populares</h2>
              <span>Ver todos</span>
            </div>

            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
          </div>
        </aside>
      </section>
    </DefaultLayout>
  )
}