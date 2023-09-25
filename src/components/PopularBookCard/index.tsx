import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { Star, StarHalf } from '@phosphor-icons/react'

export function PopularBookCard() {
  return (
    <div className="w-[324px]  bg-gray-700 rounded-lg mb-5 grid grid-cols-[64px_auto] gap-5 px-5 py-4 ">
      <Image src={book} alt='' width={64} />
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <span className='font-bold text-gray-100'>O Hobbit</span>
          <span className='text-gray-400 mb-5'>J.R.R. Tolkien</span>
          {/* verificar titulos muito grandes */}
        </div>

        <div className='flex'>
          <Star weight='fill' className='w-4 h-4 text-purple-100' />
          <Star weight='fill' className='w-4 h-4 text-purple-100' />
          <Star weight='fill' className='w-4 h-4 text-purple-100' />
          <Star weight='fill' className='w-4 h-4 text-purple-100' />
          <StarHalf weight='fill' className='w-4 h-4 text-purple-100' />
        </div>
      </div>
    </div>
  )
}