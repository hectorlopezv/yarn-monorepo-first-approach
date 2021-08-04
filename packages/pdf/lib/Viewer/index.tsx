import React, {useState, useEffect} from 'react'
import {Container, Inner} from '../styles'
import {ControlPanel_SC} from '../ControlPanel'
import {useRect} from '../../../hooks'
import {windowScrollBy, elementScrollTo} from 'seamless-scroll-polyfill'
import {Loader_SC} from '../../Loader'
import {Document, Page, pdfjs} from 'react-pdf/dist/esm/entry.webpack'
// pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/scripts/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = process.env
  .REACT_APP_PDF_WORKER_URL as string

export interface viewerInterface {
  dataUri: string
  dowloadPdfDataMobile: (...args: any[]) => any
  setToogleShow: (...args: any[]) => any
  NombrePdf: string
  base64: string
  documentElementName: string
}
export const Viewer_SC = ({
  dataUri,
  dowloadPdfDataMobile,
  NombrePdf,
  base64,
  documentElementName,
  setToogleShow,
}: viewerInterface) => {
  const [scale, setScale] = useState(1)
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [rect, ref] = useRect()
  const [loading, setloading] = useState(false)
  const [showToolBar, setshowToolBar] = useState(false)
  function onDocumentLoadSuccess({numPages}: {numPages: number}) {
    setshowToolBar(true)
    setloading(false)
    setNumPages(numPages)
  }
  useEffect(() => {
    if (rect) {
      setTimeout(() => {
        elementScrollTo(
          document.querySelector(documentElementName) as HTMLElement,
          {
            left: 0,
            top: -1000,
          },
        )

        windowScrollBy({behavior: 'smooth', top: -1000, left: 0})
      }, 50)
    }
  }, [rect])
  return (
    <>
      <Loader_SC loading={loading} />
      <Container className="pdf__container" showToolBar={showToolBar}>
        {showToolBar && (
          <ControlPanel_SC
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            dowloadPdfDataMobile={dowloadPdfDataMobile}
            NombrePdf={NombrePdf}
            base64={base64}
            setToogleShow={setToogleShow}
          />
        )}
        <Inner className="pdf__wrapper">
          <Document
            file={dataUri}
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode={'svg'}
            loading={() => setloading(true) as any}
          >
            <Page pageNumber={pageNumber} scale={scale} ref={ref as any} />
          </Document>
        </Inner>
      </Container>
    </>
  )
}
