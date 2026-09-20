'use client'

import { useCallback, useRef } from 'react'

export function useTilt<T extends HTMLElement>(strength = 9) {
  const ref = useRef<T | null>(null)

  const onPointerMove = useCallback(
    (event: React.PointerEvent<T>) => {
      const node = ref.current
      if (!node) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const box = node.getBoundingClientRect()
      const x = (event.clientX - box.left) / box.width - 0.5
      const y = (event.clientY - box.top) / box.height - 0.5
      node.style.setProperty('--rx', `${(-y * strength).toFixed(2)}deg`)
      node.style.setProperty('--ry', `${(x * strength).toFixed(2)}deg`)
    },
    [strength],
  )

  const onPointerLeave = useCallback(() => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
