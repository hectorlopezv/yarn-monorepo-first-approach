import React from 'react'
import ReactDOM from 'react-dom'
import {Viewer_SC} from '../Viewer'

export interface PdfFile_SCProps {
  NombrePdf: string
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  base64: string
  ToogleShow: boolean
  dataUrl: string
  domElementName: string
}

const PdfFile_SC: React.FC<PdfFile_SCProps> = ({
  NombrePdf,
  dowloadPdfDataMobile,
  base64,
  ToogleShow,
  dataUrl,
  domElementName,
  setToogleShow,
}) => {
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

export default PdfFile_SC
