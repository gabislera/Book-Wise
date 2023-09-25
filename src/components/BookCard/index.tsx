import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { Star, StarHalf } from '@phosphor-icons/react'
import { RatingStars } from '../RatingStars'
import * as Dialog from '@radix-ui/react-dialog'
import { SidePannel } from '../SidePannel'

export function BookCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="max-w-[318px] w-full bg-gray-700 rounded-lg grid grid-cols-[108px_auto] gap-5 px-5 py-4 ">
          <Image src={book} alt='' width={108} />
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-100'>O Hobbit</span>
              <span className='text-gray-400 mb-5'>J.R.R. Tolkien</span>
              {/* verificar titulos muito grandes */}
            </div>

            <RatingStars />
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-800/60 fixed inset-0" />
        <Dialog.Content className='fixed top-0 right-0 z-999 w-[660px] h-full bg-gray-800 outline'>

          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}