import React from 'react'
interface IPaginatorProps {
  size: number
  limit: number
  currentPage: number
  changePage: (...args: any[]) => any
}
declare class Paginator extends React.Component<IPaginatorProps> {
  changePage: (cpage: number) => void
  render(): JSX.Element
}
export {IPaginatorProps, Paginator}
//# sourceMappingURL=paginator.cjs.d.ts.map
