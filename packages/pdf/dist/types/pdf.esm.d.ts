import React from 'react'
interface PdfFile_SCProps {
  NombrePdf: string
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  base64: string
  ToogleShow: boolean
  dataUrl: string
  domElementName: string
}
declare const PdfFile_SC: React.FC<PdfFile_SCProps>
interface Viewer_SCProps {
  dataUri: string
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  NombrePdf: string
  base64: string
  documentElementName: string
}
declare const Viewer_SC: React.FC<Viewer_SCProps>
export {PdfFile_SC, Viewer_SC}
//# sourceMappingURL=pdf.esm.d.ts.map
