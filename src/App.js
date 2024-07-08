import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css"; // Make sure to import the CSS

const products = [
  {
    id: "001",
    title: "Standard Lending Solution",
    price: "₹1.00",
    features: [
      "✓F2 Financial Advisory(6 Times)",
      "✓1 Free live session",
      "✓Get 5mins Free Call",
      "✓1st call for data gathering with our advisor",
      "✓2nd call with our qualified financial advisor for a plan",
    ],
    isPopular: false,
    upiId: "harpreet3006-1@okhdfcbank",
    qrCodeImage: "./qr1.jpg", // Path to the QR code image for Product 1
  },
  {
    id: "002",
    title: "Standard Lending Solution",
    price: "₹100.00",
    features: [
      "✓F2 Financial Advisory(6 Months)",
      "✓1 Free live session",
      "✓Get 30mins Free Call",
      "✓1st call for data gathering with our advisor",
      "✓2nd call with our qualified financial advisor for a plan",
    ],
    isPopular: false,
    upiId: "harpreet3006-1@okhdfcbank",
    qrCodeImage: "./qr-100.jpg", // Path to the QR code image for Product 1
  },
  {
    id: "003",
    title: "Supreme Strategy For Lenders",
    price: "₹639.00",
    features: [
      "✓ 1 Free live sessions",
      "✓ Eligibility Check Form Multiple Lenders",
      "✓ Persoalized Lending Solutions",
      "Free live sessions",
      "✓ 3 Times Relationship Management (RM) Support",
    ],
    isPopular: false,
    qrCodeImage: "./qrcode2.jpg", // Path to the QR code image for Product 2
  },
  {
    id: "004",
    title: "Ultimate Financial Blueprint",
    price: "₹1369.00",
    features: [
      "✓ F2 Financial Advisory(3 Years)",
      "✓ Personalized Loan Solutions",
      "✓ Team Sheet For Easy Comparison",
      "Free live sessions",
      "✓ 3 Years RM Support",
    ],
    isPopular: false,
    qrCodeImage: "./qr3.jpg", // Path to the QR code image for Product 3
  },
  {
    id: "006",
    title: "Presidential Portfolio Plan",
    price: "₹5,369.00",
    features: [
      "✓ Enroll as a Channel Partner with zero fees or charges on any Financial Product",
      "✓ Based Deals on Fees & Charges",
      "✓ Regular Financial Check-ups",
      "✓ Periodic reviews & Support",
      "✓ 5 Year RM Support",
    ],
    isPopular: false,
    qrCodeImage: "./qr5.jpg", // Path to the QR code image for Product 5
  },
  {
    id: "007",
    title: "Executive Presidential Portfolio Plan",
    price: "₹10,369.00",
    features: [
      "✓ Enroll as a Channel Partner with zero fees or charges on any Financial Product",
      "✓ Based Deals on Fees & Charges",
      "✓ Regular Financial Check-ups",
      "✓ Periodic reviews & Support",
      "✓ 9 Year RM Support",
    ],
    isPopular: false,
    qrCodeImage: "./qr-10369.jpeg", // Path to the QR code image for Product 5
  },
  {
    id: "008",
    title: "Premium Presidential Portfolio Plan",
    price: "₹15,369.00",
    features: [
      "✓ Enroll as a Channel Partner with zero fees or charges on any Financial Product",
      "✓ Based Deals on Fees & Charges",
      "✓ Regular Financial Check-ups",
      "✓ Periodic reviews & Support",
      "✓ Lifetime RM Support",
    ],
    isPopular: false,
    qrCodeImage: "./qr-15369.jpeg", // Path to the QR code image for Product 5
  },

  // Add other products with their respective QR code images
];

function App() {
  return (
    <div className="card-container">
      {products.map((product) => (
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
