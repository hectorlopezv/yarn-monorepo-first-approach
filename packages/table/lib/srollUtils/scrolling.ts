import {elementScrollBy, elementScrollIntoView} from 'seamless-scroll-polyfill'

export function setMyInputRef(context: any, element: HTMLElement | null) {
  context.myInput = element
}

export function focusMyInput(
  myInput: HTMLElement | null,
  offset: number | string,
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

export function scrollhorizontal(
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
