import loginBg from '@/assets/loginbg.png'
import logo from '@/assets/logo.svg'
import googleIcon from '@/assets/google-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import visitorIcon from '@/assets/visitor-icon.svg'
import Image from 'next/image'
import { LoginButton } from '@/components/LoginButton'

export default function Login() {
  return (
    <main className='flex flex-col lg:flex-row gap-20 lg:gap-5 justify-center lg:justify-around items-center h-screen'>

      <div className='flex justify-center lg:hidden text-center lg:text-start'>
        <Image src={logo} alt='' width={200} />
      </div>
      <div className='hidden lg:flex justify-center items-center'>
        <Image src={loginBg} alt="" width={600} />
      </div>

      <div className='flex justify-center items-center w-full max-w-[23.25rem]'>
        <div className='flex flex-col w-full'>
          <h1 className='text-2xl font-bold text-center lg:text-start'>Boas vindas!</h1>
          <p className='mb-10 text-center lg:text-start'>Faça seu login ou acesse como visitante.</p>

          <div className='space-y-6'>
            <LoginButton icon={googleIcon} text='Entrar com Google' />
            <LoginButton icon={githubIcon} text='Entrar com Github' />
            <LoginButton icon={visitorIcon} text='Entrar como visitante' />
          </div>
        </div>
      </div>
    </main>
  )
}
