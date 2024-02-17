import { Star } from "@phosphor-icons/react";
import { useState } from "react";

interface RatingStarsProps {
  rating: number
  setRating?: (rating: number) => void
}

export function RatingStars({ rating, setRating }: RatingStarsProps) {
  const [previewValue, setPreviewValue] = useState(0)

  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  const handleMouseEnter = (value: number) => {
    if (isEditable) setPreviewValue(value)
  }

  const handleMouseLeave = () => {
    if (isEditable) setPreviewValue(rating)
  }

  const handleSetValue = () => {
    if (isEditable) setRating(previewValue)
  }
  return (
    <div className={`flex ${isEditable ? { cursor: 'pointer' } : undefined}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className='w-4 h-4 text-purple-100'
          weight={i + 1 <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </div>
  )
}