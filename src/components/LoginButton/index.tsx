import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

interface LoginButtonProps {
  icon: StaticImageData
  text: string
}

export function LoginButton({ icon, text }: LoginButtonProps) {
  const router = useRouter()

  function handleLogin() {
    router.push('/home')
  }
  return (
    <button onClick={handleLogin} className='px-6 py-5 bg-gray-600 rounded-lg flex gap-6 w-full hover:bg-gray-500 cursor-pointer items-center justify-center lg:justify-start'>
      <Image src={icon} alt='Icone do google' />
      <span className='text-lg font-bold text-gray-200'>{text}</span>
    </button>
  )
}