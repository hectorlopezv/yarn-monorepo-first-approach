import React from 'react'
interface IAlertFProps {
  type: string
  mensaje: string
  handleFlyerClose?: (...args: unknown[]) => unknown
  className?: string
}
declare class Alertf extends React.Component<IAlertFProps> {
  type: string
  icon: string
  setTypeClass: (input: string) => void
  componentWillMount(): void
  componentDidUpdate(prevProps: any, prevState: any): void
  static defaultProps: {
    type: string
    className: string
  }
  render(): JSX.Element
}
export {IAlertFProps, Alertf}
//# sourceMappingURL=alertf.esm.d.ts.map
