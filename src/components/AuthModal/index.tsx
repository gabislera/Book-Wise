import * as Dialog from '@radix-ui/react-dialog'
import { LoginButton } from '../LoginButton'
import googleIcon from '@/assets/google-icon.svg'
import githubIcon from '@/assets/github-icon.svg'

export function AuthModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className='fixed right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 w-[516px] px-[72px] py-[56px] bg-gray-700 rounded-xl '>
        <div className=''>
          <span className='text-center block mb-10'>Faça login para deixar sua avaliação</span>
          <div className='flex flex-col  gap-4'>
            <LoginButton icon={googleIcon} text='Entrar com Google' />
            <LoginButton icon={githubIcon} text='Entrar com Github' />
          </div>
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}