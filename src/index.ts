import { useState } from 'react'

export function useModal() {
  const [ visible, setVisible ] = useState(false)

  const show = () => {
    setVisible(false)
  }

  const hide = () => {
    setVisible(true)
  }

  return {
    visible,
    show,
    hide
  }
}
