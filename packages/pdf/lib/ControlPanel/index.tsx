/* eslint-disable no-undef */
import {Printer_SC} from '../Printer'
import React, {useState} from 'react'
import i18next from 'i18next'
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

import {FaDownload} from 'react-icons/fa'
export interface controlTypes {
  pageNumber: number
  numPages: number | null
  setPageNumber: (...args: any[]) => any
  scale: number
  setScale: (...args: any[]) => any
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  NombrePdf: string
  base64: string
}
export const ControlPanel_SC = ({
  pageNumber,
  numPages,
  setPageNumber,
  scale,
  setScale,
  dowloadPdfDataMobile,
  NombrePdf,
  base64,
  setToogleShow,
}: controlTypes) => {
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
    dowloadPdfDataMobile(NombrePdf, base64).then(() => {})
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
        firstPageClass={firstPageClass as any}
      />

      <Left onClick={goToPreviousPage} firstPageClass={firstPageClass} />

      <Span>{`${i18next.t('ToolbarPdf.pagina')} ${pageNumber} ${i18next.t(
        'ToolbarPdf.de',
      )}  ${numPages}`}</Span>

      <Right onClick={goToNextPage} lastPageClass={lastPageClass} />

      <LastPageX
        className={lastPageClass ? 'disablingIcon' : ''}
        onClick={goToLastPage}
        lastPageClass={lastPageClass as any}
      />

      <Minus onClick={zoomOut} zoomOutClass={zoomOutClass} />
      <Span>{(scale * 100).toFixed()}%</Span>
      <Plus
        onClick={zoomIn}
        zoomInClass={zoomInClass}
        disabledZoomIn={disabledZoomIn}
      />

      <FaDownload onClick={dowloadPdf} />

      <Printer_SC base64={base64} NombrePdf={NombrePdf} />
      <Close onClick={unMountPdf} />
    </Toolbar>
  )
}
