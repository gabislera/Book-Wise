import Image from 'next/image'
import { RatingStars } from '../RatingStars'
import * as Dialog from '@radix-ui/react-dialog'
import { useReadMore } from '@/hooks/useReadMore'
import { SidePannel } from '../SidePannel'

interface BookCardProps {
  sm?: boolean,
  book: {
    author: string
    cover_url: any
    name: string
  }
}

export function BookCard({ book, sm }: BookCardProps) {
  console.log(book)
  const imageWidth = sm ? 64 : 108
  const imageHeight = sm ? 94 : 152
  const maxChars = 30

  const { text } = useReadMore(book.name, maxChars)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`w-full bg-gray-700 rounded-lg grid gap-5 px-5 py-4 border border-transparent  
        ${sm ? 'max-w-[324px] grid-cols-[64px_auto] mb-2 hover:border-gray-600 ' : 'max-w-[318px] grid-cols-[108px_auto] hover:border-gray-600'}`}>
          <Image src={book.cover_url} alt='' width={imageWidth} height={imageHeight} className='' />

          <div className='flex flex-col justify-between items-start h-full'>
            <div className='flex flex-col text-start'>
              <span className='font-bold text-gray-100 '>{text}</span>
              <span className='text-gray-400 mb-5 text-sm'>{book.author}</span>
            </div>

            <RatingStars rating={4} />
          </div>
        </button>
      </Dialog.Trigger>

      <SidePannel />
    </Dialog.Root>
  )
}