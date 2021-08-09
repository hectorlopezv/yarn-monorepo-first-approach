import React from 'react'
import {Dot} from './Dot'
import DotHolder from './DotHolder'
import './Dots.scss'

export interface ISliderTableProps {
  position: number
  size: 'small' | 'medium' | 'large'
  clickable: boolean | any
  length: number
  positionChangeListener: (e: any, position: number) => void
}
export interface stateType {
  position: number
}

export class SliderTable extends React.Component<ISliderTableProps> {
  updatePosition = (e: any, position: number) => {
    if (this.props.clickable) {
      this.setState({position: position})
      if (this.props.positionChangeListener) {
        this.props.positionChangeListener(e, position)
      }
    }
  }

  generateDotHolders = () => {
    const dotHolders = []
    for (let i = 0; i < this.props.length; i++) {
      dotHolders.push(
        <DotHolder
          key={i}
          position={i}
          clickable={this.props.clickable}
          updatePosition={this.updatePosition}
        />,
      )
    }
    return dotHolders
  }
  componentDidUpdate(prevProps: any, _: any) {
    if (this.props.position !== prevProps.position) {
      //scroollbar move dots
      this.setState({
        position: this.props.position,
      })
    }
  }

  state: stateType = {position: this.props.position}
  render() {
    const dotHolders = this.generateDotHolders()
    const sliderStyle = 'slider slider-' + this.props.size
    return (
      <div className={sliderStyle}>
        <div className="dot-holders">{dotHolders}</div>
        <Dot position={this.state.position} />
      </div>
    )
  }
}
