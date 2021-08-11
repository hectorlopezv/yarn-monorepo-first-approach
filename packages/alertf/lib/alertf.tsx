/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './styles.scss'

export interface IAlertFProps {
  type: string
  mensaje: string
  handleFlyerClose?: (...args: unknown[]) => unknown
  className?: string
}

export class Alertf extends React.Component<IAlertFProps> {
  type = ''
  icon = ''
  setTypeClass = (input: string): void => {
    switch (input) {
      case 'info':
        this.type = 'alert-info'
        this.icon = 'fa-info-circle'
        break
      case 'success':
        this.type = 'alert-success'
        this.icon = 'fa-check-circle'
        break
      case 'warning':
        this.type = 'alert-warning'
        this.icon = 'fa-exclamation-circle'
        break
      case 'danger':
        this.type = 'alert-danger'
        this.icon = 'fa-exclamation-triangle'
        break
      default:
        this.type = 'alert-info'
        this.icon = 'fa-info-circle'
    }
  }

  componentDidMount() {
    this.setTypeClass(this.props.type)
    this.forceUpdate()
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.type !== this.props.type) {
      this.setTypeClass(this.props.type)
    }
  }
  public static defaultProps = {
    type: 'alert-info',
    className: '',
  }
  render() {
    return (
      <div
        className={`alert alert-custom alert-dismissible ${this.props.className}`}
        role="alert"
        data-testid="hello"
      >
        <i className={`fa ${this.icon}`} aria-label={`icon ${this.icon}`}></i>

        <div
          className="alert__message"
          aria-label={`alert message ${this.props.mensaje}`}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {this.props.mensaje}
        </div>

        <a
          role="button"
          tabIndex={0}
          className={`close ${this.type}`}
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={this.props.handleFlyerClose}
          onKeyPress={this.props.handleFlyerClose}
        >
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
    )
  }
}
