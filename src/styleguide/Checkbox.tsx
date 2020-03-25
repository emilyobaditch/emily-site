import * as React from 'react'

type Props = {
  onClick: Function
}

const Checkbox: React.FC<Props> = ({ onClick }) => {
  const [active, setActive] = React.useState(false)

  const handleClick = () => {
    setActive(!active)
    onClick()
  }
  return (
    <button type="button" onClick={handleClick}>
      <img alt="checkbox" src={active ? 'images/checked.png' : 'images/unchecked.png'} />
    </button>
  )
}

export default Checkbox
