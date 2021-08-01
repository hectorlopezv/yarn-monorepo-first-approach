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

  componentWillMount() {
    this.setTypeClass(this.props.type)
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
      >
        <i className={`fa ${this.icon}`}></i>

        <div className="alert__message">{this.props.mensaje}</div>

        <a
          className={`close ${this.type}`}
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={this.props.handleFlyerClose}
        >
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
    )
  }
}
