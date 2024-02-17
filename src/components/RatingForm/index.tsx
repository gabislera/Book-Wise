import * as Avatar from '@radix-ui/react-avatar'
import { RatingStars } from '../RatingStars'
import { Check, X } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'

interface RatingFormProps {
  onCloseForm: (arg: boolean) => void
}

export function RatingForm({ onCloseForm }: RatingFormProps) {
  const [currentDescription, setCurrentDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(currentDescription, currentRate)
    onCloseForm(false)
  }

  function clearForm() {
    setCurrentDescription('')
    onCloseForm(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[608px] bg-gray-700 rounded-lg mb-5 p-6 flex flex-col gap-3">
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-4'>
          <Avatar.Root className="inline-flex h-[40px] w-[40px] select-none overflow-hidden rounded-full bg-gray-500 border border-green-200">
            <Avatar.Image src="https://github.com/gabislera.png" />
            <Avatar.Fallback delayMs={600} className="leading-1 flex h-full w-full items-center justify-center text-sm">GC</Avatar.Fallback>
          </Avatar.Root>
          <span>Gabriela Carniel</span>
        </div>
        {/* change to select stars component */}
        <RatingStars rating={currentRate} setRating={setCurrentRate} />
      </div>

      <textarea
        className='px-5 py-3 w-full min-h-[164px] bg-gray-800 placeholder:text-gray-400' placeholder='Escreva sua avaliação'
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
      />

      <div className='flex gap-2 justify-end'>
        <button onClick={clearForm} className='bg-gray-600 p-2 rounded-[4px] hover:bg-gray-500'>
          <X className="w-6 h-6 text-purple-100" />
        </button>
        <button type='submit' className='bg-gray-600 p-2 rounded-[4px] hover:bg-gray-500'>
          <Check className="w-6 h-6 text-green-100" />
        </button>
      </div>

    </form>
  )
}