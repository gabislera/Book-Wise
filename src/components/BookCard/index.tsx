import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { Star, StarHalf } from '@phosphor-icons/react'
import { RatingStars } from '../RatingStars'

export function BookCard() {
  return (
    <div className="max-w-[318px] w-full bg-gray-700 rounded-lg grid grid-cols-[108px_auto] gap-5 px-5 py-4 ">
      <Image src={book} alt='' width={108} />
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <span className='font-bold text-gray-100'>O Hobbit</span>
          <span className='text-gray-400 mb-5'>J.R.R. Tolkien</span>
          {/* verificar titulos muito grandes */}
        </div>

        <RatingStars />
      </div>
    </div>
  )
}