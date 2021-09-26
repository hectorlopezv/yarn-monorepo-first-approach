import React from 'react'
import './styles.scss'

interface pdfItem {
  name: string
  pdf: string
  icons: React.ReactNode
}
interface fileListProps {
  pdfs: pdfItem[]
  title: string
}
// eslint-disable-next-line @typescript-eslint/ban-types
//type ComponentType<P = {}> = ComponentClass<P, any> | FunctionComponent<P>
export const FileList: React.FC<fileListProps> = ({pdfs = null, title}) => {
  return (
    <div className="fileList">
      <div className="fileList__header">
        <div>{title}</div>
      </div>
      {pdfs && Array.isArray(pdfs) && pdfs.length > 0 && (
        <div className="fileList__content col-xs-12">
          {pdfs?.map(({icons, name, pdf}, index) => {
            return (
              <div
                key={`${name}_${index}`}
                className={`col-sm-12 pl-0 pr-0 ${
                  index === 0 ? 'fileList__content__dashedLine' : ''
                }`}
              >
                {icons}
                <a href={pdf} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
