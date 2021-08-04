import React from 'react'
import PrintIcon from '../icons/Print'
import printJS from 'print-js'
//FaPrint
export interface Printer_SCProps {
  base64: string
  NombrePdf: string
}

export const Printer_SC: React.FC<Printer_SCProps> = ({base64, NombrePdf}) => {
  const print = () => {
    printJS({
      printable: base64,
      type: 'pdf',
      base64: true,
      documentTitle: NombrePdf,
    })
  }
  return <PrintIcon onClick={print} />
}
