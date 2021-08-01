import React from 'react'

export interface IDotHolderProps {
  clickable?: boolean
  position: string | number
  updatePosition: (e: any, position: string | number) => void
}

export default class DotHolder extends React.Component<IDotHolderProps> {
  render() {
    const dotHolderStyle = this.props.clickable
      ? 'dot-holder dot-holder-clickable'
      : 'dot-holder'
    const position = this.props.position
    return (
      <div
        className={dotHolderStyle}
        onClick={e => {
          e.stopPropagation()
          this.props.updatePosition(e, position)
        }}
      ></div>
    )
  }
}
