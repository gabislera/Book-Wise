import { useState } from "react"

export const useReadMore = (string: string, maxChars: number) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleText = () => {
    setShowFullText(state => !state)
  }

  const isShort = string.length > maxChars;
  
  const text = showFullText ? string : (isShort ? string.slice(0, maxChars) + '...' : string);

  return { text, toggleText, showFullText, isShort }
}