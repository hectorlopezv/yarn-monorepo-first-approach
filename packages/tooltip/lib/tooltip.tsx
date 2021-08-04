import React from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import './styles.scss'

export interface IToolTipc_SCProps {
  text: string
  icon: string
  className?: string
}

export class ToolTipc_SC extends React.Component<IToolTipc_SCProps> {
  target: HTMLElement | null = null
  state = {
    show: false,
  }
  handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({target: e.target, show: !this.state.show})
  }
  render() {
    return (
      <div
        data-container="body"
        id={'container_tooltip'}
        className={this.props.className}
      >
        <OverlayTrigger
          trigger={['hover', 'focus']}
          container={this}
          // shouldUpdatePosition={true}
          rootClose={true}
          placement={'bottom'}
          overlay={
            <Popover
              className={'popover--fix'}
              id={'popover-positioned-bottom'}
              title=""
            >
              {this.props.text}
            </Popover>
          }
        >
          <a
            id="toolTip-Icon"
            href="#"
            data-toggle="tooltip"
            data-container="body"
            style={{position: 'relative', cursor: 'pointer'}}
            onClick={this.handleClick}
            ref={button => {
              this.target = button
            }}
          >
            <i className={this.props.icon}></i>
          </a>
        </OverlayTrigger>
      </div>
    )
  }
}
