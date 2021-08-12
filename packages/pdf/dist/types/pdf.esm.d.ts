import React from "react";
interface PdfFile_SCProps {
    NombrePdf: string;
    dowloadPdfDataMobile?: (...args: any[]) => any;
    setToogleShow: (...args: any[]) => any;
    base64: string;
    ToogleShow: boolean;
    dataUrl: string;
    domElementName: string;
}
declare const PdfFile: React.FC<PdfFile_SCProps>;
interface Viewer_SCProps {
    dataUri: string;
    dowloadPdfDataMobile?: (...args: any[]) => any;
    setToogleShow: (...args: any[]) => any;
    NombrePdf: string;
    base64: string;
    documentElementName: string;
}
declare const Viewer: React.FC<Viewer_SCProps>;
export { PdfFile, Viewer };
//# sourceMappingURL=pdf.esm.d.ts.map