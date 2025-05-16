import React, { useState } from "react";

import "./delivery.css";  // Make sure to create this CSS file
    const InternationalShipping = () => {
      const [activeCategory, setActiveCategory] = useState("Order Delivery and Shopping");
      const [openIndex, setOpenIndex] = useState(null);
    
      const categories = [
        "Order Delivery and Shopping",
        "My Account",
        "Payment",
        "Returns and Exchanges",
        "International Shipping"
      ];
    
      const faqs = {"Order Delivery and Shopping": [
  {
    question: "Which are the International Shipping Destinations covered?",
    answer: "Australia | Bahrain | Canada | Germany | Italy | Kenya | Kuwait | Malaysia | Netherlands | New Zealand | Oman | Portugal | Qatar | Romania | Saudi Arabia | Singapore | South Africa | Spain | United Arab Emirates | United Kingdom | United States of America"
  },
  {
    question: "What is the minimum order value for an International Order?",
    answer: "For all international orders, your cart value should be minimum of $100 and maximum of $10000."
  },
  {
    question: "What products are excluded from international delivery?",
    answer: "Gift Cards, Gold Coins, Silver Coins, Silver Jewellery and Loose Stones"
  },
   {
    question: "Which mode of payment option is available for International Orders?",
    answer: "Payments are accepted through PayPal Payment gateway either by your PayPal account or by using International credit/debit cards only. Payment will be received only in USD. Please note that cards (credit or debit) issued in India will not be accepted for any international orders. We would like to inform the following steps needs to be followed before reaching the payment gateway using your internationally issued credit card / debit card. `Select Payment Method ----> International Issued Cards -----> PAY FOR YOUR ORDER`"
  },
   {
    question: "Who is the shipping partner?",
    answer: "Our international shipping partner is UPS."
  },
  {
    question: "In how many days will I recieve my International Order?",
    answer: "You will receive your order within 2-3 weeks after the confirmation of the order. An email confirmation will be sent to you, once your product is dispatched from our warehouse. Our logistic partner will get in touch with you once your product reaches the destination."
  },
  {
    question: "What are Shipping Charges?",
    answer: "The shipping and handling charges apply for international destinations. For Jewellery we charge $50 per order. All products/consignments are dispatched on “Delivery Duty Unpaid” (DDU) basis."
  },
  {
    question: "Are returns or exchange accepted?",
    answer: "Currently, we do not accept any returns or exchanges of our products in case of international orders."
  },
],


        "My Account": [],
        "Payment": [],
        "Returns and Exchanges": [],
        "International Shipping": []
      };
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      return (
        <div className="container">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Help Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "active" : ""}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
    
          {/* FAQ Content */}
          <div className="faq-content">
            <h3>{activeCategory}</h3>
            {faqs[activeCategory].length > 0 ? (
  faqs[activeCategory].map((faq, index) => (
    <div
      key={index}
      className="faq-item"
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        <span>{faq.question}</span>
        <span>{openIndex === index ? "−" : "+"}</span>
      </div>
      {openIndex === index && (
        <p className="faq-answer">
          {faq.answer}
        </p>
      )}
    </div>
  ))
) : (
  <p>No questions available for this category yet.</p>
)}

          </div>
        </div>
      );
    };


export default InternationalShipping