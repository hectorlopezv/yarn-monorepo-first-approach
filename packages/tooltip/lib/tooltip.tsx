/* eslint-disable jsx-a11y/anchor-is-valid */
import {Popover, OverlayTrigger} from 'react-bootstrap'
import {Container} from './styles'
import React, {Component} from 'react'

export interface IToolTipc_SCProps {
  text: string
  icon: string
  className?: string
  isMobile: boolean
}
interface stateTypes {
  show: boolean
}
export class ToolTipc extends Component<IToolTipc_SCProps> {
  target: any
  constructor(props: any) {
    super(props)
    this.target = null

    this.handleClick = this.handleClick.bind(this)
  }
  state: stateTypes = {
    show: false,
  }
  handleClick(e: any) {
    e.preventDefault()
    this.setState({target: e.target, show: !this.state.show})
  }

  render() {
    return (
      <Container data-container="body">
        <OverlayTrigger
          trigger={['focus']}
          container={this}
          //shouldUpdatePosition={true}
          rootClose={false}
          placement={this.props.isMobile ? 'left' : 'bottom'}
          overlay={
            <Popover
              id={
                this.props.isMobile
                  ? 'popover-positioned-left'
                  : 'popover-positioned-bottom'
              }
              title=""
            >
              {this.props.text}
            </Popover>
          }
        >
          <a
            id="toolTip-Icon"
            href="#"
            data-testid="toolTip-Icon"
            tabIndex={0}
            aria-label={`informative tooltip on ${this.props.text}`}
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
      </Container>
    )
  }
}
