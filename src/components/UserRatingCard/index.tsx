import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { Star, StarHalf } from '@phosphor-icons/react'

export function UserRatingCard() {
  return (
    <>
      <span className='text-sm text-gray-100 block mb-2'>Há 2 dias</span>
      <div className="max-w-[608px] bg-gray-700 rounded-lg mb-10 p-6">
        <div className='grid grid-cols-[108px_auto] gap-5 mb-6'>
          <Image src={book} alt='' width={108} />

          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-100'>O Hobbit</span>
              <span className='text-gray-400 mb-6'>J.R.R. Tolkien</span>
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

        <p className="text-gray-300 leading-[160%] text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A itaque consectetur iste dolorum molestiae dicta cumque, similique odit enim consequuntur corrupti eum eveniet sit, dignissimos nesciunt cupiditate ipsum totam rerum. Officia tempore explicabo excepturi, quasi earum, quia ipsam numquam sequi asperiores facilis ad iste aliquid culpa amet dolor! Nulla, deserunt.</p>
      </div>
    </>

  )
}