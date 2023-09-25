import { Star } from "@phosphor-icons/react";

export function RatingStars() {
  return (
    <div className='flex'>
      <Star weight='fill' className='w-4 h-4 text-purple-100' />
      <Star weight='fill' className='w-4 h-4 text-purple-100' />
      <Star weight='fill' className='w-4 h-4 text-purple-100' />
      <Star weight='fill' className='w-4 h-4 text-purple-100' />
      <Star weight='regular' className='w-4 h-4 text-purple-100' />
    </div>
  )
}