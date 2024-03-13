import React, { useState } from 'react';
import PaymentPage from './PaymentPage';
import './ProductCard.css'; 

const ProductCard = ({ title, price, features, id, isPopular, upiId }) => {
  const [isPaymentPageOpen, setIsPaymentPageOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsPaymentPageOpen(true); // Open the PaymentPage when Get Started is clicked
  };

  const handleClosePaymentPage = () => {
    setIsPaymentPageOpen(false); // Close the PaymentPage
  };

  return (
    <>
      <div className={`card ${isPopular ? 'popular' : ''}`}>
        <div className="card-header">
          <span className="card-id">#{id}</span>
          {isPopular && <span className="card-popularity">Most Popular</span>}
          <h2>{title}</h2>
          <p className="price">{price}</p>
        </div>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="btn-get-started" onClick={handleGetStartedClick}>GET STARTED</button>
      </div>
      {isPaymentPageOpen && <PaymentPage upiId={upiId} onClose={handleClosePaymentPage} isSecondQR={id} />}
    </>
  );
};

export default ProductCard;
