import React from 'react'
export interface LabelValueItemProps {
  styles: string
  styleSpan: string
  styleValue: string | null
  item: any
}

export const LabelValueItem: React.SFC<LabelValueItemProps> = ({
  styles,
  item,
  styleSpan,
  styleValue,
}) => {
  return (
    <div className={styles}>
      {item.label !== '' ? (
        <>
          <div className={styleSpan}>{item.label}</div>
          {styleValue !== null && styleValue !== undefined ? (
            <div className={styleValue}>{item.value}</div>
          ) : (
            <> {item.value}</>
          )}
        </>
      ) : (
        <br className="d-none d-md-block" />
      )}
    </div>
  )
}
