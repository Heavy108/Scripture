// ViewPDFButton.js
'use client'
import React from 'react';

const ViewPDFButton = ({ pdfPath }) => {
  const handleClick = () => {
    window.open(pdfPath, '_blank');
  };

  return <button onClick={handleClick}>View</button>;
};

export default ViewPDFButton;