import React from 'react'
import {FaPrint} from 'react-icons/fa'
import printJS from 'print-js'
export interface printerInteface {
  base64: string
  NombrePdf: string
}
export const Printer_SC = ({base64, NombrePdf}: printerInteface) => {
  const print = (_: any) => {
    printJS({
      printable: base64,
      type: 'pdf',
      base64: true,
      documentTitle: NombrePdf,
    })
  }
  return <FaPrint onClick={print} />
}
