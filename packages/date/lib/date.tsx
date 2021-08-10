import React from 'react'
import {DatePicker} from 'office-ui-fabric-react/lib/DatePicker'
import {initializeIcons} from '@uifabric/icons'
import {Container, LabelContainer, Label, DateContainer} from './styles'
import './styles.scss'

export interface IDate_SCProps {
  condition: boolean
  tooltip?: () => React.ReactNode
  handleChange: (date: Date | null | undefined) => void
  label: string
  minDateSelector: any
  maxDateSelector: any
  Date: any
  disabled: boolean
}

export class Date extends React.Component<IDate_SCProps> {
  dayPickerStrings = {
    months: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],

    shortMonths: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sept',
      'Oct',
      'Nov',
      'Dic',
    ],

    days: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],

    shortDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

    goToToday: 'Hoy',
    prevMonthAriaLabel: 'Mes anterior',
    nextMonthAriaLabel: 'Siguiente mes',
    prevYearAriaLabel: 'Año anterior',
    nextYearAriaLabel: 'Siguiente año',
    isRequiredErrorMessage: 'Campo requerido',
    invalidInputErrorMessage: 'Formato de fecha invalida',
  }

  public static defaultProps: {
    condition: false
    minDate: null
    tooltip: null
    maxDate: null
    minDateSelector: any
    maxDateSelector: any
    Date: any
    disabled: false
  }
  componentDidMount() {
    initializeIcons(undefined, {disableWarnings: true})
  }
  setFormat = (date: any): string => {
    if (date === undefined) return ''
    const month =
      (date.getMonth() + 1).toString().length === 1
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    const day =
      date.getDate().toString().length === 1
        ? '0' + date.getDate()
        : date.getDate()
    const year = date.getFullYear()

    if (typeof date === 'object') {
      return day + '/' + month + '/' + year
    } else {
      return ''
    }
  }
  render() {
    return (
      <Container>
        <LabelContainer
          condition={this.props.condition}
          className={this.props.tooltip && 'zIndex'}
        >
          <Label>{this.props.label}</Label>
          {this.props.tooltip && this.props.tooltip()}
        </LabelContainer>

        <DateContainer>
          <DatePicker
            isRequired={false}
            strings={this.dayPickerStrings}
            minDate={this.props.minDateSelector}
            maxDate={this.props.maxDateSelector}
            value={this.props.Date !== null ? this.props.Date.toDate() : null}
            onSelectDate={(date: any) => this.props.handleChange(date)}
            formatDate={(date: any) => this.setFormat(date)}
            allowTextInput={false}
            placeholder={`${'DD/MM/YYYY'}`}
            isMonthPickerVisible={true}
            showGoToToday={false}
            className="datePickerFabric"
            disabled={this.props.disabled}
          />
        </DateContainer>
      </Container>
    )
  }
}
