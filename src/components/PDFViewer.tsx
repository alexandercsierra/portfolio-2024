import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
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
      src="https://drive.google.com/file/d/1J1yFQj6R2GYp1YnzJHiq3B8_i2bCYD-i/preview"
      type="application/pdf"
    >
      <p>
        Your browser does not support PDFs.{" "}
        <a href="https://drive.google.com/file/d/1J1yFQj6R2GYp1YnzJHiq3B8_i2bCYD-i/preview">
          Download the PDF
        </a>{" "}
        instead.
      </p>
    </iframe>
  );
}

export default PDFViewer;
