import { colors } from './colors'
import { StyledSystemProps } from './DynamicStyledSystemComponent'

const fontFamilies: { heading: string; body: string } = {
  heading: 'Spartan',
  body: 'Spartan',
}

interface TypographyStyles {
  H1: StyledSystemProps
  H2: StyledSystemProps
  H3: StyledSystemProps
  H4: StyledSystemProps
  H5: StyledSystemProps
  LargeLead: StyledSystemProps
  SmallLead: StyledSystemProps
  Paragraph: StyledSystemProps
  SmallParagraph: StyledSystemProps
}
export const typographyStyles: TypographyStyles = {
  H1: {
    fontSize: [50, 51, 52, 57],
    fontWeight: 700,
    fontFamily: fontFamilies.heading,
    as: 'h1',
    color: colors.ultra,
  },
  H2: {
    fontSize: [37, 39, 41, 43],
    fontWeight: 700,
    color: colors.ultra,
    fontFamily: fontFamilies.heading,
    as: 'h2',
  },
  H3: {
    fontSize: [27, 28, 30, 32],
    fontWeight: 700,
    color: colors.dark,
    fontFamily: fontFamilies.heading,
    as: 'h3',
  },
  H4: {
    fontSize: [18, 20, 22, 24],
    fontWeight: 700,
    color: colors.dull,
    fontFamily: fontFamilies.heading,
    as: 'h4',
  },
  H5: {
    fontWeight: 700,
    fontSize: [16, 17, 19, 21],
    color: colors.ultra,
    fontFamily: fontFamilies.heading,
    as: 'h5',
  },
  LargeLead: {
    fontWeight: 500,
    color: colors.accent,
    fontSize: [18, 20, 22, 24],
    fontFamily: fontFamilies.heading,
    as: 'p',
  },
  SmallLead: {
    fontWeight: 500,
    color: colors.accent,
    fontSize: [17, 18, 19, 21],
    fontFamily: fontFamilies.heading,
    as: 'p',
  },
  Paragraph: {
    fontSize: [14, 15, 15, 16],
    fontWeight: 300,
    color: colors.darker,
    fontFamily: fontFamilies.body,
    as: 'p',
    lineHeight: 2,
  },
  SmallParagraph: {
    fontSize: [13, 14, 14, 15],
    fontWeight: 300,
    color: colors.darker,
    fontFamily: fontFamilies.body,
    as: 'p',
  },
}
