
// YourComponent.js
import React from 'react';
import ViewPDFButton from '@/Helper/pdf';

const YourComponent = () => {
  return (
    <div>
      {/* Other content */}
      <ViewPDFButton pdfPath="/AFM.pdf" />
    </div>
  );
};

export default YourComponent;