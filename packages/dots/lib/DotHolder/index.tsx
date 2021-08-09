import React from 'react'

export interface IDotHolderProps {
  clickable?: boolean
  position: number
  updatePosition: (e: any, position: number) => void
}

export default class DotHolder extends React.Component<IDotHolderProps> {
  render() {
    const dotHolderStyle = this.props.clickable
      ? 'dot-holder dot-holder-clickable'
      : 'dot-holder'
    const position: number = this.props.position
    return (
      <div
        role="button"
        tabIndex={0}
        data-testid="dot-holder"
        aria-label="dot-holder"
        className={dotHolderStyle}
        onClick={e => {
          e.stopPropagation()
          this.props.updatePosition(e, position)
        }}
        onKeyPress={e => {
          e.stopPropagation()
          this.props.updatePosition(e, position)
        }}
      />
    )
  }
}
