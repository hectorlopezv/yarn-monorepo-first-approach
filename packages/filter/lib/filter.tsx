import React from 'react'
import './styles.scss'

import {Scrollbars} from 'react-custom-scrollbars'
interface OptionTypes {
  value: string
  label: string
}
export interface IFilterSelectProps {
  title: string
  options?: OptionTypes[] | null
  disabled: boolean
  onSelected?: (...args: any[]) => any
  placeholder: string
}
interface stateType {
  style: any
  options?: OptionTypes[] | null
  heightContainer: string | number
  displayOptions: boolean
  hover: boolean
}
export class FilterSelect extends React.Component<IFilterSelectProps> {
  state = {
    hover: false,
    displayOptions: false,
    options:
      this.props.options === null
        ? [
            {value: 'value1', label: 'label1'},
            {value: 'value2', label: 'label2'},
          ]
        : this.props.options,
    title: this.props.title,
    heightContainer: 32,
    actualheightContainer: 234,
  }
  public static defaultProps: {
    disabled: false
    title: ''
    placeholder: ''
    onSelected: () => unknown
    options: null
  }
  componentDidUpdate(prevProps: any, _: any) {
    if (this.props.options !== prevProps.options) {
      this.setState({
        options: this.props.options,
        hover: false,
        displayOptions: false,
        title: this.props.title,
      })
    }
  }
  renderThumbVertical = ({style, ...props}: stateType) => {
    return (
      <div
        {...props}
        style={{
          position: 'relative',
          display: 'block',
          backgroundColor: '#ff6600',
          borderRadius: '20px',
          width: '12px',
          opacity: '1',
          transform: 'translate(-6px, 0px) !important',
        }}
      />
    )
  }
  hover = () => {
    if (this.props.disabled === false) {
      this.setState({hover: !this.state.hover})
    }
    this.setState(
      {
        options: this.props.options,
      },
      () => {
        this.setHeight()
      },
    )
  }
  onClick = (e: any) => {
    e.preventDefault()
    this.setState({
      displayOptions: !this.state.displayOptions,
    })
  }
  itemClick = (_: any, item: any) => {
    this.setState({
      title: item.label,
      displayOptions: false,
      options: this.props.options,
    })
    if (this.props.onSelected) {
      this.props.onSelected(item)
    }
  }
  textChange = (e: any) => {
    const filterOptions = (this.props.options as OptionTypes[]).filter(
      function (entry) {
        return entry.label.toUpperCase().includes(e.target.value.toUpperCase())
      },
    )
    this.setState(
      {
        options: filterOptions,
      },
      () => {
        this.setHeight()
      },
    )
  }
  setHeight = () => {
    if (this.state.options && this.state.options.length) {
      this.setState({
        actualheightContainer: `${
          this.state.heightContainer *
          (this.state.options.length <= 7 ? this.state.options.length : 7)
        }px`,
      })
    }
  }
  onMouseLeave = () => {
    this.setState({
      displayOptions: false,
    })
  }
  render() {
    return (
      <div className={`col-xs-12 pl-0 pr-0 position-relative`}>
        <button
          disabled={this.props.disabled}
          className={`SelectTableFilter__title ${
            this.state.hover === true ? 'SelectTableFilter__title--hover' : ''
          }  ${this.props.disabled ? 'disabled_selectedTable' : ''}`}
          onMouseEnter={this.hover}
          onMouseLeave={() => {
            this.hover()
          }}
          onClick={this.onClick}
        >
          <div>{this.state.title}</div>
          <span
            className={`SelectTableFilter__title__icon ${
              this.state.hover === true
                ? 'SelectTableFilter__title__icon--hover'
                : ''
            }`}
          ></span>
        </button>
        {this.state.displayOptions === true ? (
          <div
            className="SelectTableFilter__Options"
            onMouseLeave={this.onMouseLeave}
          >
            <div className="SelectTableFilter__Options__search">
              <input
                type="text"
                className="SelectTableFilter__Options__search__input"
                onChange={this.textChange}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
              />
              <span className="glyphicon glyphicon-search SelectTableFilter__Options__search__icon"></span>
            </div>
            <div style={{height: this.state.actualheightContainer}}>
              <Scrollbars renderThumbVertical={this.renderThumbVertical}>
                {
                  <div>
                    {this.state.options?.map((item, index) => {
                      return (
                        <button
                          disabled={this.props.disabled}
                          key={`button_${index}`}
                          className="SelectTableFilter__Options__item"
                          onClick={e => {
                            this.itemClick(e, item)
                          }}
                        >
                          {item.label}
                        </button>
                      )
                    })}
                  </div>
                }
              </Scrollbars>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
  }
}
