import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from 'react-icons/ri';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function CvModal() {
  const [numPages, setNumPages] = useState(0);
  const [pdfPageNumber, setPdfPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfPageNumber(1);
    setLoading(false);
  };

  return (
    <dialog
      id="modal_cv"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.currentTarget.close();
        }
      }}
      className="modal w-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-box bg-white rounded-none relative"
      >
           <button
          onClick={() => {
            document.getElementById('modal_cv')?.close();

          }}
          className="absolute top-2 right-2 bg-[#222] text-white z-20"
        >
            <RiCloseLine size={25} />
        </button>
        <Document
          file="/CV Henry Frizzel Johanis.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error(error);
            setLoading(false);
          }}
          loading={<p>Loading PDF...</p>}
        >
          <div className="flex justify-center">
            <Page
              key={pdfPageNumber}
              pageNumber={pdfPageNumber}
              height={600}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              onLoadSuccess={() => setLoading(false)}
              onLoadError={(error) => console.error('Page error:', error)}
            />
          </div>
        </Document>

        {loading && <p className="text-center">Loading page...</p>}

        <div className="flex items-center justify-center gap-5 mt-5">
          <button
            disabled={pdfPageNumber <= 1}
            onClick={() => {
              setLoading(true);
              setPdfPageNumber((prev) => prev - 1);
            }}
            className="disabled:opacity-30"
          >
            <RiArrowLeftSLine size={25} />
          </button>

          <span>
            {pdfPageNumber} / {numPages}
          </span>

          <button
            disabled={pdfPageNumber >= numPages}
            onClick={() => {
              setLoading(true);
              setPdfPageNumber((prev) => prev + 1);
            }}
            className="disabled:opacity-30"
          >
            <RiArrowRightSLine size={25} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
