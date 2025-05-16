import React, { useState } from "react";
import "./helpfaqs.css";

function HelpFaqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I redeem Encircle Points?",
      answer: "Offline Redemption: While making purchases at Tanishq, Goldplus, Zoya, MIA, World of Titan, Fastrack, Helios & Titan Eye plus outlets across India, provide registered mobile number to the cashier before final billing to redeem points. Available points can be redeemed at the will of the customer at the store. OTP is must to redeem points at the store as well as online. Points will be credited only when the membership number is provided while billing or check out.   Online Redemption: Encircle redemption is applicable only for login/sign users. After the OTP verification, the user can redeem available encircle points."
    },
    {
      question: "Do I need to pay shipping / delivery charges?",
      answer: "There are no shipping/delivery charges within India. For information on shipping charges for international orders please see the Shipping and Handling Charges section under Shipping Policy section"
    },
    {
      question: "Can I send gifts to my loved ones?",
      answer: "Yes, you can send any of the products available on www.tanishq.co.in as gifts to your loved ones along with a personalized message."
    },
    {
      question: "What happens if my order is lost in transit?",
      answer: "If your order is lost in transit, we will initiate a replacement or refund after investigating with the courier."
    },
    {
      question: "Questions on Cash On Delivery (COD)",
      answer: "Cash on Delivery is a mode of payment provided by Titan where you can pay in cash upon the receipt of your product. We do not take any advance payment for COD orders."
    },
    {
      question: "Questions on Tokenization",
      answer: "Tokenisation refers to replacement of actual card details with an alternate code called the “token”, which shall be unique for a combination of card, token requestor (i.e. the entity which accepts request from the customer for tokenisation of a card and passes it on to the card network to issue a corresponding token) and device (referred hereafter as “identified device”)."

 
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1 className="help-title">Help & Contact</h1>
      <h2 className="help-subtitle">Have A Question</h2>

      <div className="help-options">
        <div className="help-option">
          <img src="images\173.png" alt="Chat Icon" className="help-icon" />
          <p className="help-label">Chat with Us</p>
        </div>

        <div className="help-option">
          <img src="images\174.png" alt="Call Icon" className="help-icon" />
          <p className="help-label">Call Us At</p>
          <p className="help-contact">1800-266-0123</p>
        </div>

        <div className="help-option">
          <img src="images\175.png" alt="Email Icon" className="help-icon" />
          <p className="help-label">Write to Us</p>
        </div>
      </div>

      <p className="help-note">
        The toll free number is only applicable for domestic orders within India. For international customers or deliveries please reach us out through whatsapp, Live chat or email.
      </p>

      <div className="faq-section">
        <div className="faq-header">
          <h2 className="faq-title">Top Customer Questions</h2>
          <a href="/faqs" className="faq-link">ALL FAQ'S</a>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p className="faq-q-text">{faq.question}</p>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
export default HelpFaqs;