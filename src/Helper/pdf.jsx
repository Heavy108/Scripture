'use client'
import React from 'react';

const ViewPDFButton = ({ pdfPath }) => {
  const handleViewClick = () => {
    // Convert Base64 string back to binary data
    const binaryData = atob(pdfPath);
    // Create array buffer from binary data
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    // Create new Uint8Array
    const uint8Array = new Uint8Array(arrayBuffer);
    // Fill Uint8Array with binary data
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    // Create Blob object
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    // Create URL for the blob object
    const url = URL.createObjectURL(blob);
    // Open PDF in a new tab
    window.open(url, '_blank');
    // Revoke the URL to release the object URL
    URL.revokeObjectURL(url);
  };

  const handleDownloadClick = () => {
    // Convert Base64 string back to binary data
    const binaryData = atob(pdfPath);
    // Create array buffer from binary data
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    // Create new Uint8Array
    const uint8Array = new Uint8Array(arrayBuffer);
    // Fill Uint8Array with binary data
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    // Create Blob object
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    // Create URL for the blob object
    const url = URL.createObjectURL(blob);
    // Create anchor element
    const a = document.createElement('a');
    // Set anchor's href to the URL of the blob
    a.href = url;
    // Set anchor's download attribute to specify file name
    a.download = 'document.pdf';
    // Append anchor element to document body
    document.body.appendChild(a);
    // Click the anchor to trigger download
    a.click();
    // Remove anchor element from document body
    document.body.removeChild(a);
    // Revoke the URL to release the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button onClick={handleViewClick}>View PDF</button>
      <button onClick={handleDownloadClick}>Download PDF</button>
    </>
  );
};

export default ViewPDFButton;
