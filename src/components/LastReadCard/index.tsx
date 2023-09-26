import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { Star, StarHalf } from '@phosphor-icons/react'
import { useReadMore } from '@/hooks/useReadMore'

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum debitis eveniet! A totam suscipit amet, porro laudantium libero repellendus hic, veritatis minus necessitatibus magnam quos? Voluptates ratione distinctio nesciunt minus nemo quam hic commodi culpa repellat molestias impedit dolorem reprehenderit quibusdam architecto, temporibus dignissimos, qui esse! Sint saepe voluptates laborum quis repudiandae rerum, tenetur corporis? Reprehenderit fuga ipsum adipisci dolores iure unde error, exercitationem molestiae. Asperiores rem consectetur exercitationem deleniti excepturi sapiente, alias ea dolorum voluptatum? Sint corrupti exercitationem itaque dolorem aspernatur animi delectus nesciunt atque tempore adipisci deleniti, earum sed magnam ullam cumque nam veniam neque facere blanditiis.'

export function LastReadCard() {
  const maxChars = 130
  const { text } = useReadMore(description, maxChars)

  return (
    <div className="max-w-[608px] h-[192px] bg-gray-600 rounded-lg mb-10 p-6 grid grid-cols-[108px_auto] gap-5 overflow-hidden">
      <Image src={book} alt='' width={108} />
      <div className='flex flex-col'>
        <div className='flex justify-between mb-3'>
          <span>Há 2 dias</span>
          <div className='flex'>
            <Star weight='fill' className='w-4 h-4 text-purple-100' />
            <Star weight='fill' className='w-4 h-4 text-purple-100' />
            <Star weight='fill' className='w-4 h-4 text-purple-100' />
            <Star weight='fill' className='w-4 h-4 text-purple-100' />
            <StarHalf weight='fill' className='w-4 h-4 text-purple-100' />
          </div>
        </div>

        <span className='font-bold text-gray-100'>O Hobbit</span>
        <span className='text-gray-400 mb-6'>J.R.R. Tolkien</span>

        <p className="text-gray-300 leading-[160%] text-sm">{text}</p>
      </div>
    </div>
  )
}