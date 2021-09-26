import React, {useState} from 'react'
import './styles.scss'
import CheckIcon from './checkIcon'
import FileIcon from './fileIcon'
export interface dragDrop {
  callbackFiles: (...args: any[]) => any
  multiple?: boolean
  accept?: string
  selectTitle?: string
  eraseTitle?: string
}

export const DragDropFile: React.FC<dragDrop> = ({
  callbackFiles = null,
  multiple = false,
  accept = null,
  selectTitle = 'Seleccionar archivo',
  eraseTitle = 'Borrar',
}) => {
  const [filesNames, setfilesNames] = useState<unknown[] | null>(null)
  const setFiles = () => {
    const names: any = []
    const elem = document.getElementById('fileDnD') as HTMLInputElement
    Array.from(elem.files!).forEach((element: any) => names.push(element.name))
    setfilesNames(names)
    callbackFiles && callbackFiles(elem.files)
  }
  const clearFiles = () => {
    setfilesNames(null)
    const elem = document.getElementById('fileDnD') as HTMLInputElement
    elem.value = ''
  }
  return (
    <div className="col-xs-12 row pl-0 pr-0 dragAndDropFile">
      <div className="col-xs-12 col-sm-5 dragAndDropFile--left">
        {filesNames === null ? (
          <input
            className="btn-orange-v2 dragAndDropFile__btn"
            type="button"
            value={selectTitle}
            onClick={() => {
              const input = document.getElementById(
                'fileDnD',
              ) as HTMLInputElement
              input.type = 'file'
              input.click()
            }}
          />
        ) : (
          <div className="dragAndDropFile__svgContainer">
            <CheckIcon />
          </div>
        )}
      </div>
      <div className="col-xs-12 col-sm-6 dragAndDropFile--right">
        <div className="dragAndDropFile__content">
          <input
            type="file"
            id="fileDnD"
            multiple={multiple ? multiple : false}
            accept={accept ? accept : '*'}
            className={`dragAndDropFile__file ${
              filesNames != null ? 'dragAndDropFile__file--hiden' : ''
            }`}
            name="fileDnD"
            data-testid="fileDnD"
            onChange={setFiles}
          />
          {filesNames === null ? (
            <>
              <div className="dragAndDropFile__zone">
                <p>O arrastre el archivo aquí</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-xs-12 pl-0 pr-0">
                {filesNames?.map((item: any, index) => {
                  return (
                    <div
                      className="row col-xs-12 col-sm-6 col-md-7"
                      key={index}
                    >
                      <FileIcon />
                      <span>{item}</span>
                    </div>
                  )
                })}
                <input
                  className="btn-orange-v2 dragAndDropFile__btnDelete col-xs-12 col-sm-6 col-md-5"
                  type="button"
                  value={eraseTitle}
                  onClick={clearFiles}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
