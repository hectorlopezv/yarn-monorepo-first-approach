import {useState, useCallback} from 'react'
import {elementScrollBy, elementScrollIntoView} from 'seamless-scroll-polyfill'

export const useRect = () => {
  const [rect, setRect] = useState<HTMLElement | null | undefined>(null)
  const ref = useCallback((node: HTMLElement | null | undefined) => {
    if (node !== null) {
      setRect(node)
    }
  }, [])
  function focusMyInput(
    myInput: HTMLElement | null,
    offset = '-180px',
    block: 'center' | 'end' | 'nearest' | 'start' = 'center',
  ) {
    let pos, top

    if (myInput) {
      pos = myInput.style.position
      top = myInput.style.top

      myInput.style.position = 'relative'
      myInput.style.top = `${offset}px`
      elementScrollIntoView(myInput, {behavior: 'smooth', block: block})
      myInput.style.top = top
      myInput.style.position = pos
    }
  }

  function scrollhorizontal(
    element: HTMLElement,
    top: number,
    left: number,
    behavior: 'auto' | 'smooth' = 'smooth',
  ) {
    elementScrollBy(element, {
      top: top,
      left: left,
      behavior: behavior,
    })
  }
  return [rect, ref, scrollhorizontal, focusMyInput]
}
