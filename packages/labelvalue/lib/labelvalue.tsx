/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import {LabelValueItem} from './LabelValueItem'
import './styles.scss'
export interface LabelValueProps {
  subColumns: boolean
  stylesColumn: string
  dataColumn: any
}

export const LabelValue: React.FC<LabelValueProps> = ({
  stylesColumn,
  dataColumn,
  subColumns,
  ...props
}) => {
  return (
    <div className="labelValue" tabIndex={0}>
      <div className="row col-sm-12 p-0">
        {dataColumn.map((item: any, index: number) => {
          return (
            <div
              className={stylesColumn}
              aria-describedby={`${index}_${item.value}`}
              tabIndex={0}
            >
              <LabelValueItem
                key={`labelValueItem_${index}`}
                id={`${index}_${item.value}`}
                item={item}
                styles="col-sm-12 p-0"
                styleSpan={`${
                  subColumns === true ? 'col-sm-6' : ''
                } labelValue__label`}
                styleValue={subColumns === true ? 'col-sm-6' : null}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
