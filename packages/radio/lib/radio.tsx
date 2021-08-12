import React from 'react'
import {Radio, FormGroup, Form} from 'react-bootstrap'
import './styles.scss'

export interface IRadioHvProps {
  selectedRadio: number | null | string
  messages: string[]
  label: string
  selectedRadioHandler: (arg: number | string | null) => void
}

type MyState = {
  upload_radio: number | null | string // like this
}

export class RadioHv extends React.Component<IRadioHvProps> {
  state: MyState = {
    upload_radio: null,
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (
      nextProps.selectedRadio !== this.props.selectedRadio ||
      this.state.upload_radio !== nextProps.selectedRadio
    ) {
      return true
    }
    if (this.state.upload_radio !== nextState.upload_radio) {
      return true
    }
    return false
  }

  componentDidUpdate(prevProps: any, _: any) {
    if (
      prevProps.selectedRadio == null ||
      this.state.upload_radio !== prevProps.selectedRadio
    ) {
      this.props.selectedRadioHandler(this.state.upload_radio)
    } else {
      this.setState({upload_radio: null})
    }
  }
  setStatus = (e: any) => {
    this.setState({upload_radio: e.target.value})
  }
  render() {
    return (
      <Form className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 provedores__form">
        <FormGroup className=" col-xs-11 col-sm-11  col-md-11 col-lg-11 ">
          {this.props.messages.map((message, id) => {
            return (
              <div
                key={`${this.props.label}_${id}`}
                className="provedores__selectorRadio  row"
              >
                <div className="provedores__selectorLabelRadio col-xs-5 col-sm-5 col-md-5 col-lg-5">
                  <p className="provedores__RadioLabel">{this.props.label}</p>
                </div>
                <Radio
                  name={`${
                    id === 0 ? this.props.messages[0] : this.props.messages[1]
                  }`}
                  checked={
                    this.state.upload_radio ===
                    `${
                      id === 0 ? this.props.messages[0] : this.props.messages[1]
                    }`
                  }
                  value={`${
                    id === 0 ? this.props.messages[0] : this.props.messages[1]
                  }`}
                  onChange={this.setStatus}
                  onKeyDown={this.setStatus}
                  className="col-xs-5 col-sm-5 col-md-5 col-lg-5 provedores__Radio"
                >
                  <span className="provedores__RadioText">{message}</span>
                </Radio>
              </div>
            )
          })}
        </FormGroup>
      </Form>
    )
  }
}
