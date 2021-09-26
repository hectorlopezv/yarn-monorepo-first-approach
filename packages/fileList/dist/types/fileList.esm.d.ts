import React from 'react';
interface pdfItem {
    name: string;
    pdf: string;
    icons: React.ReactNode;
}
interface fileListProps {
    pdfs: pdfItem[];
    title: string;
}
declare const FileList: React.FC<fileListProps>;
export { FileList };
//# sourceMappingURL=fileList.esm.d.ts.map