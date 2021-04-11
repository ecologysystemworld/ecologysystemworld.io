import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Button from '../components/Button';

export default function DocumentViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div style={{
      display: 'flex',
      flex: '1 0 auto',
      position: 'relative'
    }}
    >
      <Document
        file={props.document}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading WhitePaper</div>}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
        }}
      >
        <Page pageNumber={pageNumber} />
        <div class="page-controls">
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </Button>
          <span>
            {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </span>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </Button>
        </div>
      </Document>

    </div>
  );
}