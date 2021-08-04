import React from 'react'
interface IDate_SCProps {
  condition: boolean
  tooltip?: () => React.ReactNode
  handleChange: (date: Date | null | undefined) => void
  label: string
  minDateSelector: Date | undefined
  maxDateSelector: Date | undefined
  Date: any
  disabled: boolean
}
declare class Date_SC extends React.Component<IDate_SCProps> {
  dayPickerStrings: {
    months: string[]
    shortMonths: string[]
    days: string[]
    shortDays: string[]
    goToToday: string
    prevMonthAriaLabel: string
    nextMonthAriaLabel: string
    prevYearAriaLabel: string
    nextYearAriaLabel: string
    isRequiredErrorMessage: string
    invalidInputErrorMessage: string
  }
  static defaultProps: {
    condition: false
    minDate: null
    tooltip: null
    maxDate: null
    minDateSelector: any
    maxDateSelector: any
    Date: any
    disabled: false
  }
  componentDidMount(): void
  setFormat: (date: Date | undefined) => string
  render(): JSX.Element
}
export {IDate_SCProps, Date_SC}
//# sourceMappingURL=date.cjs.d.ts.map
