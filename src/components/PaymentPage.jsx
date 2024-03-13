import React from 'react';
import './PaymentPage.css'; // Confirm this path is correct
import qrCodeImage1 from './qr1.jpg'; // Import the first QR code image with a unique name
import qrCodeImage2 from './qrcode2.jpg'; // Import the second QR code image with a unique name
import qrCodeImage3 from './qr3.jpg'; // Import the third QR code image with a unique name
import qrCodeImage4 from './qr4.jpg'; // Import the fourth QR code image with a unique name
import qrCodeImage5 from './qr5.jpg'; // Import the fifth QR code image with a unique name

const PaymentPage = ({ upiId, onClose, isSecondQR }) => {
  let qrCodeImage;

  switch (isSecondQR) {
    case '001': // If the id is '002', show qrCodeImage2
    qrCodeImage = qrCodeImage1;
    break;
    case '002': // If the id is '002', show qrCodeImage2
      qrCodeImage = qrCodeImage2;
      break;
    case '003':
      qrCodeImage = qrCodeImage3;
      break;
    case '004':
      qrCodeImage = qrCodeImage4;
      break;
    case '005':
      qrCodeImage = qrCodeImage5;
      break;
    default:
      qrCodeImage = qrCodeImage2; // For all other cases, show qrCodeImage1
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <span className="close-button" onClick={onClose}>&times;</span>


      
        <img src={qrCodeImage} alt="QR Code" className="qr-code"/>
        {/* <p className="upi">UPI ID: {upiId}</p> */}
        <button className="close-payment-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
