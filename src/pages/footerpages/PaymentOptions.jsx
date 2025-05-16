import React, { useState } from "react";
import "./delivery.css";

const PaymentOptions = () => {
  const [activeCategory, setActiveCategory] = useState("Order Delivery and Shopping");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    "Order Delivery and Shopping",
    "My Account",
    "Payment",
    "Returns and Exchanges",
    "International Shipping"
  ];

  const faqs = {
    "Order Delivery and Shopping": [
      {
        question: "What are the payment options available?",
        answer:
          "Domestic Orders-Payments can be made through credit cards, debit cards, international cards, net banking or cash on delivery. Please note that payments on www.tanishq.co.in will be accepted only in INR for domestic orders. In case of international credit cards, the transaction amount will be converted to INR before the payment is accepted. Currency conversion charges may apply based on your credit card policy. International Orders- Payments for International Orders are accepted through PayPal Payment gateway either by your PayPal account or by using International credit/debit cards only. For orders being shipped outside India, the payment will be accepted only in US Dollars. For international orders, currency conversion rates will apply according to the prevailing exchange rates on the day of placing the order. For shipments being sent outside India, Prices will include all the applicable taxes in India and the shipping and handling charges. For International Orders you will be required to send us government-issued photo Identity proof preferably: a) Driving License b) Passport (NOTE : Indian issued cards will not be accepted for international orders.)"
      },
      {
        question: "Which credit cards are accepted for domestic and international payments?",
        answer:
          "Andhra Bank - Visa Only	,Axis Bank Limited - Visa Only, Bank of Baroda - Visa Only, Barclays Bank Plc - Visa Only, Union Bank of India - Visa Only and more..."
      },
      {
        question: "Which domestic debit cards are accepted?",
        answer:
          "Andhra Bank - Visa Only	,Axis Bank Limited - Visa Only, Bank of Baroda - Visa Only, Barclays Bank Plc - Visa Only, Union Bank of India - Visa Only and more..."
      },
      {
        question: "Accepted Domestic Banks for Payment through Net Banking?",
        answer:
          "We support net banking from all leading banks such as SBI, HDFC, ICICI, Axis Bank, and more."
      }
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
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Reset open index on category change
              }}
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
                <p className="faq-answer">{faq.answer}</p>
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

export default PaymentOptions;
