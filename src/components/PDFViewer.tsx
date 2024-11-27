import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { resumeLink } from "../constants/otherData";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <iframe
      style={{ width: "800px", height: "1000px" }}
      class="pdf-frame"
      src={resumeLink}
      type="application/pdf"
    >
      <p>
        Your browser does not support PDFs.{" "}
        <a href={resumeLink}>Download the PDF</a> instead.
      </p>
    </iframe>
  );
}

export default PDFViewer;
