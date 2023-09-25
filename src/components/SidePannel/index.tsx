import * as Dialog from '@radix-ui/react-dialog'

export function SidePannel() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-gray-800/60 fixed inset-0" />
      <Dialog.Content className='fixed top-0 right-0 z-999 w-[660px] h-full bg-gray-800 outline'>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}