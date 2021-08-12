/* eslint-disable no-undef */
import {Printer_SC} from '../Printer'
import React, {useState} from 'react'
import {
  Toolbar,
  Span,
  Plus,
  Minus,
  LastPageX,
  Right,
  Left,
  FirstPageX,
  Close,
} from '../styles'

import {DownloadIcon} from '../icons'
export interface ControlPanel_SCProps {
  pageNumber: number
  numPages: number | null
  setPageNumber: (...args: any[]) => any
  scale: number
  setScale: (...args: any[]) => any
  dowloadPdfDataMobile?: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  NombrePdf: string
  base64: string
}

export const ControlPanel_SC: React.FC<ControlPanel_SCProps> = ({
  pageNumber,
  numPages,
  setPageNumber,
  scale,
  setScale,
  dowloadPdfDataMobile,
  NombrePdf,
  base64,
  setToogleShow,
}) => {
  const [disabledZoomIn, setdisabledZoomIn] = useState(false)
  const isFirstPage = pageNumber === 1
  const isLastPage = pageNumber === numPages

  const firstPageClass = isFirstPage ? true : false
  const lastPageClass = isLastPage ? true : false

  const goToFirstPage = (_: any) => {
    if (!isFirstPage) setPageNumber(1)
  }
  const goToPreviousPage = (_: any) => {
    if (!isFirstPage) setPageNumber(pageNumber - 1)
  }
  const goToNextPage = (e: any) => {
    e.stopPropagation()
    if (!isLastPage) setPageNumber(pageNumber + 1)
  }
  const goToLastPage = (e: any) => {
    e.stopPropagation()
    if (!isLastPage) setPageNumber(numPages)
  }

  const isMinZoom = scale < 0.6
  const isMaxZoom = scale >= 2.0

  const zoomOutClass = isMinZoom ? true : false
  const zoomInClass = isMaxZoom ? true : false

  const zoomOut = (e: any) => {
    e.stopPropagation()
    if (!isMinZoom) setScale(scale - 0.1)
  }

  const zoomIn = (e: any) => {
    e.stopPropagation()
    const container = document.querySelector('.pdf__container') as HTMLElement
    const wrapper = document.querySelector('.pdf__wrapper') as HTMLElement
    const newScale = scale - 0.2
    const newWidth = wrapper.clientWidth * newScale
    if (newWidth >= container.clientWidth) {
      setdisabledZoomIn(true)
      return
    }
    setdisabledZoomIn(false)
    if (!isMaxZoom) setScale(scale + 0.1)
  }

  const dowloadPdf = (e: any) => {
    e.stopPropagation()
    dowloadPdfDataMobile && dowloadPdfDataMobile(NombrePdf, base64)
  }

  const unMountPdf = (e: any) => {
    e.stopPropagation()
    setToogleShow((latest: boolean) => !latest)
  }

  return (
    <Toolbar>
      <FirstPageX
        className={firstPageClass ? 'disablingIcon' : ''}
        onClick={goToFirstPage}
        firstpageclass={firstPageClass as any}
      />

      <Left onClick={goToPreviousPage} firstpageclass={firstPageClass} />

      <Span>{`Toolbar ${pageNumber} De ${numPages}`}</Span>

      <Right onClick={goToNextPage} lastpageclass={lastPageClass} />

      <LastPageX
        className={lastPageClass ? 'disablingIcon' : ''}
        onClick={goToLastPage}
        lastpageclass={lastPageClass as any}
      />

      <Minus onClick={zoomOut} zoomoutclass={zoomOutClass} />
      <Span>{(scale * 100).toFixed()}%</Span>
      <Plus
        onClick={zoomIn}
        zoominclass={zoomInClass}
        disabledzoomin={disabledZoomIn === true}
      />

      <DownloadIcon onClick={dowloadPdf} />

      <Printer_SC base64={base64} NombrePdf={NombrePdf} />
      <Close onClick={unMountPdf} />
    </Toolbar>
  )
}
