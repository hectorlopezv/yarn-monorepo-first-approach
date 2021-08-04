import React from 'react'
import './styles.scss'

import LeftIcon from './LeftIcon'
import RightIcon from './RightIcon'
export interface IPaginationPanelProps {
  totalPages: number
  currPage: number
  changePage: (page: number) => void
}

export class PaginationPanel extends React.Component<IPaginationPanelProps> {
  render() {
    return (
      <div style={{padding: '15px'}}>
        {this.props.totalPages > 0 ? (
          <div className="paginador">
            <div
              className={
                this.props.currPage === 1
                  ? 'paginadorArrowLeft inactive'
                  : 'paginadorArrowLeft'
              }
              onClick={() =>
                this.props.currPage !== 1
                  ? this.props.changePage(this.props.currPage - 1)
                  : null
              }
            >
              <LeftIcon
                className={
                  this.props.currPage === 1
                    ? 'paginadorArrowLeft inactive'
                    : 'paginadorArrowLeft'
                }
              />
            </div>
            {this.props.totalPages > 1 ? (
              <div className="contentPaginador">
                {this.props.currPage} de {this.props.totalPages} pag
              </div>
            ) : (
              <div className="contentPaginador">
                {this.props.currPage} de 1 pag
              </div>
            )}

            <div
              className={
                this.props.currPage === this.props.totalPages
                  ? 'paginadorArrowright inactive'
                  : 'paginadorArrowright'
              }
              onClick={() =>
                this.props.currPage !== this.props.totalPages
                  ? this.props.changePage(this.props.currPage + 1)
                  : null
              }
            >
              <RightIcon
                className={
                  this.props.currPage === this.props.totalPages
                    ? 'paginadorArrowright inactive'
                    : 'paginadorArrowright'
                }
              />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
