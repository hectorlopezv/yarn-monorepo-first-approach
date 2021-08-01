import React from 'react'
interface ISliderTableProps {
  position: string | number
  size: string | number
  clickable: boolean | any
  length: number
  positionChangeListener: (e: any, position: number | string) => void
}
interface stateType {
  position: string | number
}
declare class SliderTable extends React.Component<ISliderTableProps> {
  updatePosition: (e: any, position: string | number) => void
  generateDotHolders: () => JSX.Element[]
  componentDidUpdate(prevProps: any, _: any): void
  state: stateType
  render(): JSX.Element
}
export {ISliderTableProps, stateType, SliderTable}
//# sourceMappingURL=dots.esm.d.ts.map
