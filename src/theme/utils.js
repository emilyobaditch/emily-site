import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import DynamicStyledSystemComponent, { StyledSystemProps } from './DynamicStyledSystemComponent'
import { typographyStyles } from './typographyStyles'

const createComponent: (textStyle: StyledSystemProps, displayName: string) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
    const component: React.FC<StyledSystemProps> = props => (
      <DynamicStyledSystemComponent {...textStyle} {...props}>
        {props.children}
      </DynamicStyledSystemComponent>
    )
    component.displayName = displayName;
    return component
  }