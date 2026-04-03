import { useEffect, useRef, useState } from 'react'

const DEFAULT_ROOT_MARGIN = '0px 0px -10% 0px'

function shouldRevealImmediately(disabled) {
  if (disabled) return true
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fires once when the element intersects the viewport (with rootMargin).
 * Skips observation when prefers-reduced-motion is set — visible from first paint.
 */
export function useInViewOnce(options = {}) {
  const { rootMargin = DEFAULT_ROOT_MARGIN, threshold = 0, disabled = false } = options
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(() => shouldRevealImmediately(disabled))

  useEffect(() => {
    if (shouldRevealImmediately(disabled)) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { root: null, rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, disabled])

  return [ref, isInView]
}
