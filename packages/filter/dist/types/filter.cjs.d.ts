import React from 'react'
interface OptionTypes {
  value: string
  label: string
}
interface IFilterSelectProps {
  title: string
  options?: OptionTypes[] | null
  disabled: boolean
  onSelected?: (...args: any[]) => any
  placeholder: string
}
interface stateType {
  style: any
  options?: OptionTypes[] | null
  heightContainer: string | number
  displayOptions: boolean
  hover: boolean
}
declare class FilterSelect extends React.Component<IFilterSelectProps> {
  state: {
    hover: boolean
    displayOptions: boolean
    options: OptionTypes[] | undefined
    title: string
    heightContainer: number
    actualheightContainer: number
  }
  static defaultProps: {
    disabled: false
    title: ''
    placeholder: ''
    onSelected: () => unknown
    options: null
  }
  componentDidUpdate(prevProps: any, _: any): void
  renderThumbVertical: ({style, ...props}: stateType) => JSX.Element
  hover: () => void
  onClick: (e: any) => void
  itemClick: (_: any, item: any) => void
  textChange: (e: any) => void
  setHeight: () => void
  onMouseLeave: () => void
  render(): JSX.Element
}
export {IFilterSelectProps, FilterSelect}
//# sourceMappingURL=filter.cjs.d.ts.map
