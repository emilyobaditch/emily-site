import React from 'react'
import styled from 'styled-components'
import {
  borderRadius,
  BorderRadiusProps,
  border,
  BorderProps,
  color,
  layout,
  LayoutProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
} from 'styled-system'

export type StyledSystemProps =
  | SpaceProps
  | FontSizeProps
  | FontStyleProps
  | SizeProps
  | TextStyleProps
  | LetterSpacingProps
  | FontFamilyProps
  | FontWeightProps
  | BorderRadiusProps
  | BorderProps
  | LayoutProps
  | FontFamilyProps
  | LineHeightProps
  | TextAlignProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { color: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> }

export default styled.div`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${size}
  ${layout}
  ${color}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${border}
  ${lineHeight}
  ${textAlign}
`
