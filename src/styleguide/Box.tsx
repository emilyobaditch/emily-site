import React from 'react'
import DynamicStyledSystemComponent, { StyledSystemProps } from './DynamicStyledSystemComponent'

const baseBoxStyles: StyledSystemProps = {}

interface BoxProps {
  Box: React.FC<StyledSystemProps>
}

const Box: (boxStyle: StyledSystemProps) => React.FC<StyledSystemProps> = boxStyle => {
  const component: React.FC<StyledSystemProps> = props => (
    <DynamicStyledSystemComponent {...boxStyle} {...props}>
      {props.children}
    </DynamicStyledSystemComponent>
  )
  component.displayName = 'Box'
  return component
}

export default Box(baseBoxStyles)
