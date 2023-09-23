import Image, { StaticImageData } from 'next/image'

interface LoginButtonProps {
  icon: StaticImageData
  text: string
}

export function LoginButton({ icon, text }: LoginButtonProps) {
  return (
    <button className='px-6 py-5 bg-gray-600 rounded-lg flex gap-6 w-full hover:bg-gray-500 cursor-pointer items-center justify-center lg:justify-start'>
      <Image src={icon} alt='Icone do google' />
      <span className='text-lg font-bold text-gray-200'>{text}</span>
    </button>
  )
}