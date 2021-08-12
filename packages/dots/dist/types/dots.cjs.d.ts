import React from 'react'
interface ISliderTableProps {
  position: number
  size: 'small' | 'medium' | 'large'
  clickable: boolean | any
  length: number
  positionChangeListener: (e: any, position: number) => void
}
interface stateType {
  position: number
}
declare class SliderTable extends React.Component<ISliderTableProps> {
  updatePosition: (e: any, position: number) => void
  generateDotHolders: () => JSX.Element[]
  componentDidUpdate(prevProps: any, _: any): void
  state: stateType
  render(): JSX.Element
}
export {ISliderTableProps, stateType, SliderTable}
//# sourceMappingURL=dots.cjs.d.ts.map
