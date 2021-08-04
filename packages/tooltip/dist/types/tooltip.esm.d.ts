import React from 'react'
interface IToolTipc_SCProps {
  text: string
  icon: string
  className?: string
}
declare class ToolTipc_SC extends React.Component<IToolTipc_SCProps> {
  target: HTMLElement | null
  state: {
    show: boolean
  }
  handleClick: (e: any) => void
  render(): JSX.Element
}
export {IToolTipc_SCProps, ToolTipc_SC}
//# sourceMappingURL=tooltip.esm.d.ts.map
