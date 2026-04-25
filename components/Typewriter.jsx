'use client'

import { useEffect, useMemo, useState } from "react"

const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

/**
 * Types phrases letter-by-letter, pauses, then deletes and moves to next.
 */
const Typewriter = ({
  words = [],
  className = "",
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseMs = 1100,
  loop = true,
  cursorClassName = "ml-1 inline-block w-[0.6ch] animate-pulse",
}) => {
  const safeWords = useMemo(() => (Array.isArray(words) ? words.filter(Boolean) : []), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = safeWords[wordIndex] ?? ""

  useEffect(() => {
    if (safeWords.length === 0) return

    const atStart = charCount === 0
    const atEnd = charCount === currentWord.length

    // If we reached the end, pause before deleting.
    if (!isDeleting && atEnd) {
      const t = window.setTimeout(() => setIsDeleting(true), pauseMs)
      return () => window.clearTimeout(t)
    }

    // If we finished deleting, move to next word.
    if (isDeleting && atStart) {
      setIsDeleting(false)
      if (!loop && wordIndex === safeWords.length - 1) return
      setWordIndex((i) => (i + 1) % safeWords.length)
      return
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed
    const t = window.setTimeout(() => {
      setCharCount((c) => {
        const next = isDeleting ? c - 1 : c + 1
        return clamp(next, 0, currentWord.length)
      })
    }, speed)

    return () => window.clearTimeout(t)
  }, [
    charCount,
    currentWord.length,
    deleteSpeed,
    isDeleting,
    loop,
    pauseMs,
    safeWords.length,
    typeSpeed,
    wordIndex,
  ])

  if (safeWords.length === 0) return null

  return (
    <span className={className}>
      {currentWord.slice(0, charCount)}
      <span aria-hidden="true" className={cursorClassName}>
        |
      </span>
    </span>
  )
}

export default Typewriter
