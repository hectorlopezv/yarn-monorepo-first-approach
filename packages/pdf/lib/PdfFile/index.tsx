import React from 'react'
import ReactDOM from 'react-dom'
import {Viewer_SC} from '../Viewer'
export interface pdfFileTypes {
  NombrePdf: string
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  base64: string
  ToogleShow: boolean
  dataUrl: string
  domElementName: string
}
export const PdfFile_SC = ({
  NombrePdf,
  dowloadPdfDataMobile,
  base64,
  ToogleShow,
  dataUrl,
  domElementName,
  setToogleShow,
}: pdfFileTypes) => {
  return ReactDOM.createPortal(
    <>
      {ToogleShow && dataUrl !== null && (
        <Viewer_SC
          dataUri={dataUrl}
          dowloadPdfDataMobile={dowloadPdfDataMobile}
          NombrePdf={NombrePdf}
          base64={base64}
          setToogleShow={setToogleShow}
          documentElementName={domElementName}
        />
      )}
    </>,
    document.querySelector(domElementName) as HTMLElement,
  )
}
