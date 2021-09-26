import React from 'react'
interface pdfItem {
  name: string
  pdf: string
  icons: React.ReactNode
}
interface filelistProps {
  pdfs: pdfItem[]
  title: string
}
declare const FileList: React.FC<filelistProps>
export {FileList}
//# sourceMappingURL=filelist.cjs.d.ts.map
