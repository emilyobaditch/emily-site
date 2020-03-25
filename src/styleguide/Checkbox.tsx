import * as React from 'react'
import styled from 'styled-components'
import Box from './Box'

type Props = {
  onClick: Function
}
const BaseButton = styled.button`
  background-color: #fff;
  border: none;
  height: 25px;
`
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
`
const Checkbox: React.FC<Props> = ({ onClick, children }) => {
  const [active, setActive] = React.useState(false)

  const handleClick = () => {
    setActive(!active)
    onClick()
  }
  return (
    <Wrapper>
      <BaseButton type="button" onClick={handleClick}>
        <img alt="checkbox" src={active ? 'images/checked.png' : 'images/unchecked.png'} />
      </BaseButton>
      {children}
    </Wrapper>
  )
}

export default Checkbox
