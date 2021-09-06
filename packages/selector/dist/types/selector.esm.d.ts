import React from 'react'
interface optionInterface {
  value: string
  label: string
}
interface SelectProps {
  styles?: any
  label: string
  disabled: boolean
  placeholder: string
  Options?: optionInterface[]
  value?: string
  type?: string
  onClick?: (args: any, type: string) => void
  className?: string
  inputId?: string
}
declare const Selector: React.FC<SelectProps>
export {optionInterface, SelectProps, Selector}
//# sourceMappingURL=selector.esm.d.ts.map
