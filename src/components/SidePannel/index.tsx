import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { RatingStars } from '../RatingStars'
import { BookOpen, Bookmark, X } from '@phosphor-icons/react'
import { RatingCard } from '../RatingCard'
import { AuthModal } from '../AuthModal'
import { RatingForm } from '../RatingForm'
import { useState } from 'react'

export function SidePannel() {
  const isLogged = true
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className='fixed top-0 right-0 overflow-y-scroll z-999 w-[660px] h-full bg-gray-800 py-16 flex flex-col items-center'>
        <section className='w-[564px] bg-gray-700 rounded-lg  px-8 py-6'>
          <Dialog.Close className='absolute top-[24px] right-[32px]'>
            <X className='w-6 h-6' />
          </Dialog.Close>
          <header className='grid grid-cols-[171px_auto] gap-8'>
            <div>
              <Image src={'/images/books/o-programador-pragmatico.png'} alt='' width={171} height={242} />
            </div>
            <div className='flex flex-col justify-between items-start h-full'>
              <div className='flex flex-col text-start'>
                <span className='font-bold text-gray-100 '>14 Hábitos de Desenvolvedores Altamente Produtivos</span>
                <span className='text-gray-400 mb-5 text-sm'>Zeno Rocha</span>
              </div>

              <div>
                <RatingStars rating={4} />
                <span className='text-gray-400 mb-5 text-sm'>3 avaliações</span>
              </div>
            </div>
          </header>

          <footer className="w-full flex gap-14 py-6 border-t border-gray-600 mt-10 ">
            <div className="flex items-center justify-start gap-5">
              <Bookmark className="w-6 h-6 text-green-100" />
              <div className="flex flex-col">
                <strong className="text-gray-200">Computação</strong>
                <span className="text-sm text-gray-300">Categoria mais lida</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-5">
              <BookOpen className="w-6 h-6 text-green-100" />
              <div className="flex flex-col">
                <strong className="text-gray-200">3853</strong>
                <span className="text-sm text-gray-300">Páginas lidas</span>
              </div>
            </div>
          </footer>
        </section>

        <section className='w-[564px]'>
          <div className="flex items-center mt-10 mb-4 justify-between">
            <span className="text-sm">Avaliações</span>
            {isLogged ? (
              <button className="text-sm" onClick={() => setIsFormVisible(true)}>Avaliar</button>
            ) : (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="text-sm">Avaliar</button>
                </Dialog.Trigger>
                <AuthModal />
              </Dialog.Root>
            )}
          </div>
          {isFormVisible && <RatingForm onCloseForm={setIsFormVisible} />}
          <RatingCard noImage />
          <RatingCard noImage />
          <RatingCard noImage />
        </section>
      </Dialog.Content>
    </Dialog.Portal >
  )
}