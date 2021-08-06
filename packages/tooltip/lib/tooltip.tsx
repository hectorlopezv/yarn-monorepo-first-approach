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
export class ToolTipc_SC extends Component<IToolTipc_SCProps> {
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
          trigger={['hover', 'focus']}
          container={this}
          //shouldUpdatePosition={false}
          rootClose={true}
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
