import { useState, useLayoutEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function useTheme() {
  return useContext(ThemeContext)
}
export function useMediaQuery(arg: Function | number): boolean {
  const [queryMatch, setQueryMatch]: [boolean, Function] = useState(false)
  const { breakpoints } = useTheme()

  useLayoutEffect(() => {
    let matchMediaFunc = null
    let bp = null
    if (typeof arg === 'function') {
      matchMediaFunc = arg
    } else if (typeof arg === 'number') {
      bp = arg
    }
    const setMediaMatchHandler: Function = (e: { matches: boolean }) => setQueryMatch(e.matches)

    const mediaQueryList = matchMediaFunc
      ? matchMediaFunc()
      : window.matchMedia(`(min-width: ${breakpoints[bp || 0]})`)

    setMediaMatchHandler(mediaQueryList)

    mediaQueryList.addListener(setMediaMatchHandler)
    return () => mediaQueryList.removeListener(setMediaMatchHandler)
  }, [arg, breakpoints])

  return queryMatch
}
