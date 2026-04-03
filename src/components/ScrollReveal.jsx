import { useInViewOnce } from '../hooks/useInViewOnce'

/**
 * Scroll-driven entrance: opacity + translateY (compositor-friendly).
 * Uses IntersectionObserver once per instance — typical for marketing pages (dozens of nodes).
 */
function ScrollReveal({
  as: Tag = 'div',
  children,
  className = '',
  style,
  delay = 0,
  rootMargin,
  disabled = false,
  ...rest
}) {
  const [ref, visible] = useInViewOnce({ rootMargin, disabled })
  const classes = ['scroll-reveal', visible && 'scroll-reveal--visible', className].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--sr-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default ScrollReveal
