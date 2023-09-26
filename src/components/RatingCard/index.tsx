import avatar from '../../assets/Avatar.png'
import Image from 'next/image'
import book from '../../assets/arquitetura-limpa.png'
import { RatingStars } from '../RatingStars';
import { useReadMore } from '@/hooks/useReadMore';

interface RatingCardProps {
  noImage?: boolean
}

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum debitis eveniet! A totam suscipit amet, porro laudantium libero repellendus hic, veritatis minus necessitatibus magnam quos? Voluptates ratione distinctio nesciunt minus nemo quam hic commodi culpa repellat molestias impedit dolorem reprehenderit quibusdam architecto, temporibus dignissimos, qui esse! Sint saepe voluptates laborum quis repudiandae rerum, tenetur corporis? Reprehenderit fuga ipsum adipisci dolores iure unde error, exercitationem molestiae. Asperiores rem consectetur exercitationem deleniti excepturi sapiente, alias ea dolorum voluptatum? Sint corrupti exercitationem itaque dolorem aspernatur animi delectus nesciunt atque tempore adipisci deleniti, earum sed magnam ullam cumque nam veniam neque facere blanditiis.'

export function RatingCard({ noImage }: RatingCardProps) {
  const maxChars = 240
  const { text, showFullText, toggleText, isShort } = useReadMore(description, maxChars)

  return (
    <div className="max-w-[608px] bg-gray-700 rounded-lg mb-5 p-6 flex flex-col gap-8">
      <header className='flex justify-between '>
        <div className='grid grid-cols-[auto_1fr] gap-4 items-center'>
          <Image src={avatar} alt='' />
          {/* change to radix avatar */}
          <div className='flex flex-col'>
            <span className='text-gray-100'>Jaxson Dias</span>
            <span className='text-gray-400 text-sm'>Hoje</span>
          </div>
        </div>
        <RatingStars />
      </header>

      {noImage ? (
        <footer>
          <p className="text-gray-300 leading-[160%] text-sm">
            {showFullText ? description : text}
            {isShort && (
              <button
                className="text-purple-500 font-bold cursor-pointer"
                onClick={toggleText}
              >
                {showFullText ? 'ver menos' : 'ver mais'}
              </button>
            )}
          </p>
        </footer>
      ) : (
        <footer className='grid grid-cols-[108px_auto] gap-5'>
          <Image src={book} alt='' width={108} className='w-[108px]' />

          <div className='flex flex-col'>
            <span className='font-bold text-gray-100'>O Hobbit</span>
            <span className='text-gray-400 mb-5'>J.R.R. Tolkien</span>

            <p className="text-gray-300 leading-[160%] text-sm">
              {showFullText ? description : text}
              {isShort && (
                <button
                  className="text-purple-500 font-bold cursor-pointer"
                  onClick={toggleText}
                >
                  {showFullText ? 'ver menos' : 'ver mais'}
                </button>
              )}
            </p>
          </div>
        </footer>
      )}


    </div>
  )
}