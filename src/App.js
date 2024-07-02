import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css'; // Make sure to import the CSS

const products = [
  {
    id: "001",
    title: "Standard Lending Solution",
    price: "₹1.00",
    features: [
      "✓F2 Financial Advisory",
      "✓1 Free live session",
      "✓Get 15mins Free Call",
      "1st call for data gathering with our advisor",
      "✓2nd call with our qualified financial advisor for a plan"
    ],
    isPopular: false,
    upiId: 'harpreet3006-1@okhdfcbank',
    qrCodeImage: './qr1.jpg' // Path to the QR code image for Product 1
  },
  {
    id: "002",
    title: "Supreme Strategy For Lenders",
    price: "₹639.00",
    features: [
      "✓ 1 Free live sessions",
      "✓ Eligibility Check Form Multiple Lenders",
      "✓ Persoalized Lending Solutions",
      "Free live sessions",
      "✓ One Year Relationship Management (RM) Support"
    ],
    isPopular: false,
   
    qrCodeImage: './qrcode2.jpg' // Path to the QR code image for Product 2
  },
  {
    id: "003",
    title: "Ultimate Financial Blueprint",
    price: "₹1369.00",
    features: [
      "✓ F2 Financial Advisory ",
      "✓ Personalized Loan Solutions",
      "✓ Team Sheet For Easy Comparison",
      "Free live sessions",
      "✓ 1 Year RM Support"
    ],
    isPopular: false,
    
    qrCodeImage: './qr3.jpg'

  },
  // ... Include other product details here
  {
    id: "004",
    title: "Magnus Premier Portfolio",
    price: "₹3,369.00",
    features: [
      "✓ Priority Access to Senior Financial Experts ",
      "✓ Rapid Lending Processing",
      "✓ Regular financial consultations sessions",
      "✓ Lifetime F2 Membership",
      
    ],
    isPopular: false,
   
    qrCodeImage: './qr4.jpg'
  },
  {
    id: "005",
    title: "Presidential Portfolio Plan ",
    price: "₹5,369.00",
    features: [
      "✓ Enroll as a Channel Partner with zero fees or charges on any Financial Product",
      "✓ Based Deals on Fees & Charges ",
      "✓ Regular Financial Check-ups",
      "✓ Periodic reviews & Support",
      "✓ Priority Processing",
      
    ],
    isPopular: false,
   
    qrCodeImage: './qr5.jpg'
  },
  // Add other products with their respective QR code images
];

function App() {
  return (
    <div className="card-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          features={product.features}
          isPopular={product.isPopular}
          upiId={product.upiId}
          qrCodeImage={product.qrCodeImage}
          
        />
      ))}
    </div>
  );
}

export default App;
