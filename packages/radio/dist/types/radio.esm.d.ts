import React from 'react'
interface IRadioHvProps {
  selectedRadio: number | null | string
  messages: string[]
  label: string
  selectedRadioHandler: (arg: number | string | null) => void
}
type MyState = {
  upload_radio: number | null | string
}
declare class RadioHv extends React.Component<IRadioHvProps> {
  state: MyState
  shouldComponentUpdate(nextProps: any, nextState: any): boolean
  componentDidUpdate(prevProps: any, _: any): void
  setStatus: (e: any) => void
  render(): JSX.Element
}
export {IRadioHvProps, RadioHv}
//# sourceMappingURL=radio.esm.d.ts.map
