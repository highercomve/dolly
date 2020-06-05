import { useRef, useEffect } from 'react'

const REFRESH_RATE = Number(process.env.REACT_APP_REFRESH_RATE || '4000')

export function useInterval (callback, delay = REFRESH_RATE) {
  const savedCallback = useRef(null)
  const intervalId = useRef(undefined)

  const tick = () => {
    if (savedCallback.current) { savedCallback.current() }
  }

  const removeInterval = () => {
    clearInterval(intervalId.current)
    intervalId.current = undefined
  }

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    tick()
  }, [])

  useEffect(() => {
    if (intervalId.current && delay === null) {
      removeInterval()
    }
    if (delay !== null) {
      if (!intervalId.current) {
        intervalId.current = setInterval(tick, delay)
      }
      return () => {
        removeInterval()
      }
    }
  }, [delay])

  return {
    removeInterval,
    tick
  }
}
