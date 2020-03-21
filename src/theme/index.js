const bps = { sm: 600, md: 960, lg: 1280, xl: 1920 }
const breakpoints = Object.keys(bps).reduce((acc, key) => {
  const val = `${bps[key]}px`
  acc.push(val)
  acc[key] = val
  return acc
}, [])

const breakpointMatch = {
  down: bp => {
    return () => window.matchMedia(`(max-width: ${breakpoints[bp]})`)
  },
  up: bp => {
    return () => window.matchMedia(`(min-width: ${breakpoints[bp]})`)
  },
}

const theme = {
  bps,
  bpInts: Object.values(bps),
  breakpoints,
  breakpointMatch,
  colors: {
    primary: {
      ultra: "#FFF",
      dull: "#2d4159",
      accent: "#0677a1",
      default: "#895061",
      dark: "#78244c",
      darker: "#59253a",
    },
  },
  sizes: {
    content: {
      small: "330px",
      medium: "744px",
      large: "1040px",
    },
    width: {
      default: "200px",
    },
    height: {
      default: "50px",
    },
  },
}

export default theme
