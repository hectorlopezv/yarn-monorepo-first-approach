import React from 'react'
import {Viewer} from '../Viewer'

export interface PdfFile_SCProps {
  NombrePdf: string
  dowloadPdfDataMobile?: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  base64: string
  ToogleShow: boolean
  dataUrl: string
  domElementName: string
}

export const PdfFile: React.FC<PdfFile_SCProps> = ({
  NombrePdf,
  dowloadPdfDataMobile,
  base64,
  ToogleShow,
  dataUrl,
  domElementName,
  setToogleShow,
}) => {
  return (
    <>
      {ToogleShow && dataUrl !== null && (
        <Viewer
          dataUri={dataUrl}
          dowloadPdfDataMobile={dowloadPdfDataMobile}
          NombrePdf={NombrePdf}
          base64={base64}
          setToogleShow={setToogleShow}
          documentElementName={domElementName}
        />
      )}
    </>
  )
}
