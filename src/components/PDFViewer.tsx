import { resumeLink } from "../constants/otherData";

function PDFViewer() {
  return (
    <iframe
      style={{ width: "800px", height: "1000px" }}
      className="pdf-frame"
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
