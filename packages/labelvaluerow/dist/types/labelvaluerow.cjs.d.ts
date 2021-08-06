import React from 'react'
interface ILabelValueRowProps {
  styles: string
  concealable: boolean
  label: string
  value: string
  delta: any
}
declare class LabelValueRow extends React.Component<ILabelValueRowProps> {
  state: {
    display: boolean
  }
  clickHandler: () => void
  componentDidUpdate(prevProps: any, __: any): void
  render(): JSX.Element
}
export {ILabelValueRowProps, LabelValueRow}
//# sourceMappingURL=labelvaluerow.cjs.d.ts.map
