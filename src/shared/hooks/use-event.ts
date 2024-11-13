'use client'
import { usePathname } from 'next/navigation'
import * as React from 'react'

export function useClickOutside(
  ref: React.RefObject<any>,
  callbackFn: () => void,
): void {
  function handler(e: MouseEvent) {
    if (ref.current && !ref.current.contains(e.target as any)) {
      callbackFn()
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])
}

export function usePathChange(callbackFn: () => void): void {
  const path = usePathname()

  function handler() {
    if (path) {
      callbackFn()
    }
  }

  React.useEffect(() => {
    handler()
    return () => {}
  }, [path])
}

export function useKeyEvent(
  event: 'keyup' | 'keydown' | 'keypress',
  key: string,
  callbackFn: () => void,
): void {
  function handler(e: KeyboardEvent) {
    if (e.key.toString() === key) {
      callbackFn()
    }
  }

  React.useEffect(() => {
    window.addEventListener(event, handler)

    return () => {
      window.removeEventListener(event, handler)
    }
  }, [])
}
