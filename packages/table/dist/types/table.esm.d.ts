import React from 'react'
interface fieldType {
  csvformater?: boolean
  formater?: boolean
  dataField: string
  width: string
  title: string
}
interface ITableProps {
  titleCssOverflowContainer: string
  filename: string
  displayBtnDescarga: boolean
  showTitle?: boolean
  identificator?: string
  isMobile: boolean
  overFlowTable: boolean
  titleTable: string
  data: any
  fields: fieldType[]
  preventScroll?: undefined | boolean | null
  toright?: any
  changePage?: (page: number) => void
  estadoFormater: any
  csvformater: any
}
interface stateTypes {
  prevScrollBarPosition: number
  percentageScroll: number
  overflowMount: boolean
}
declare class Table extends React.Component<ITableProps> {
  onPageChange: (page: number, _: number) => void
  slideMyTable: (e: any, position: number | string) => void
  changeDotPosition: import('lodash').DebouncedFunc<(e: any) => void>
  componentDidMount(): void
  componentWillUnmount(): void
  componentDidUpdate(prevProps: any, _: any): void
  renderPaginationPanel: (props: any) => JSX.Element
  isOverflown: (element: HTMLElement | null) => boolean
  createCustomExportCSVButton: () => JSX.Element
  simplebar: HTMLElement | any
  pagination: boolean
  previousPosition: number | null
  MyTableContainer: HTMLElement | null
  myInput: HTMLElement | null
  overflowMount: boolean
  optsDesktop: {
    clearSearch: boolean
    noDataText: string
    pageDropDown: boolean
    sizePerPage: number
    withoutNoDataText: boolean
    pageStartIndex: number
    hideSizePerPage: boolean
    alwaysShowAllBtns: boolean
    hidePageListOnlyOnePage: boolean
    exportCSVText: string
    onPageChange: (page: number, _: number) => void
    exportCSVBtn: () => JSX.Element
    paginationPanel: (props: any) => JSX.Element
  }
  state: stateTypes
  static defaultProps: {
    isMobile: false
    displayBtnDescarga: true
    filename: ''
    showTitle: true
    titleCssOverflowContainer: 'div.react-bs-table-container div.react-bs-table.react-bs-table-bordered div.simplebar-wrapper div.simplebar-mask div.simplebar-offset div.simplebar-content-wrapper'
  }
  render(): JSX.Element
}
export {fieldType, ITableProps, stateTypes, Table}
//# sourceMappingURL=table.esm.d.ts.map
