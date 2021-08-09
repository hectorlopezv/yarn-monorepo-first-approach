import React from 'react'

export interface IDotProps {
  position: number
}

export class Dot extends React.Component<IDotProps> {
  public render() {
    const positionClass = 'dot dot-position-' + this.props.position
    return <div className={positionClass}></div>
  }
}
