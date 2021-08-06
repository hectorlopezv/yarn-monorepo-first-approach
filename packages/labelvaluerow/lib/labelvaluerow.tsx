import './styles.scss'

import React from 'react'

import {UpIcon, DownIcon} from './icons'
export interface ILabelValueRowProps {
  styles: string
  concealable: boolean
  label: string
  value: string
  delta: any
}

export class LabelValueRow extends React.Component<ILabelValueRowProps> {
  state = {
    display: true,
  }
  clickHandler = () => {
    this.setState({
      display: !this.state.display,
    })
  }
  componentDidUpdate(prevProps: any, __: any) {
    if (
      prevProps.delta &&
      this.props.delta &&
      prevProps.delta !== this.props.delta
    ) {
      this.setState({
        display: false,
      })
    }
  }
  render() {
    return (
      <div
        className={`col-sm-12 col-md-12 col-xs-12 col-lg-12  pl-0 pr-0 labelValueRow ${this.props.styles}`}
      >
        <div className="labelValueRow__header row col-sm-12 col-md-12 col-xs-12 col-lg-12 pr-0">
          <div className="col-sm-7 col-md-7 col-lg-6">
            <div
              className={`labelValueRow__label ${
                this.state.display === true || this.props.concealable === false
                  ? 'labelValueRow__active'
                  : ''
              }`}
            >
              {this.props.label}
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-6 d-flex align-items-center justify-content-between">
            <div className="labelValueRow__value">{this.props.value}</div>
            {this.props.concealable !== false && (
              <>
                <DownIcon
                  className={`labelValueRow__iconRight ${
                    this.state.display === true ? 'd-none' : 'd-block'
                  }`}
                  onClick={() => this.clickHandler()}
                />
                <UpIcon
                  className={`labelValueRow__iconRight ${
                    this.state.display === true
                      ? 'd-block labelValueRow__active'
                      : 'd-none'
                  }`}
                  onClick={() => this.clickHandler()}
                />
              </>
            )}
          </div>
        </div>

        <div
          className={`col-sm-12 col-md-12 col-xs-12 col-lg-12  labelValueRow__content ${
            this.state.display === true || this.props.concealable === false
              ? 'd-block'
              : 'd-none'
          }`}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
