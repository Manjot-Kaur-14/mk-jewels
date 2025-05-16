import React, { useState } from "react";
import "./delivery.css";  // Ensure this CSS file is created and styled accordingly

const Returns = () => {
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
        question: "How can I cancel my order?",
        answer: "Orders once placed can only be cancelled prior to shipment. Refer cancellation policy"
      },
      {
        question: "In case I change my mind about the size picked up, can I replace the order?",
        answer: "Yes, it is possible to return the unused product and order for a replacement. Please refer to the Return Policy for details. Please note that returns/replacements are not applicable for International Orders. Although there are few exceptions. To know further about it kindly refer to the International Order section of Return Policy"
      },
      {
        question: "What do I do if I receive the wrong product?",
        answer: "You can call us on 1800-266-0123 and write to ecomsupport@titan.co.in to report the incident and cancel the order. If you want to return the product, please do not use it. We will arrange for the pick-up of the unused wrong item from the provided address through our logistic partner and arrange for the refund. For more details, refer to the Return Policy section. For international orders, please check the International Order section under Return Policy."
      },
      {
        question: "The product that I received was damaged and I want to return it. What do I do?",
        answer: "In the unlikely event that the product delivered is in damaged condition, you can return the product unused and in the same condition as you received it, in its original packaging, along with the invoice for a refund. We will arrange for the order to be collected from the provided address through our logistic partner and returned to us. Please refer to Return policy for details. Call us on 1800-266-0123 or write to ecomsupport@titan.co.in within 7 days of receipt for MK product and 30 days of receipt for Mia product to report the incident. For international orders, please check the International Order section under Return Policy."
      },
      {
        question: "What is the return policy?",
        answer: "You can return the product unused and in the same condition as you received it, in its original packaging, along with the invoice for a refund. We will arrange for the order to be collected from the provided address through our logistic partner and returned to us. We shall process the refund only after the receipt of the product at our location in unused condition and in its original packaging along with its original tags and invoice, failing which refund may not be possible. Please refer to Return policy for details. For International Orders, please check the International Order section under Return policy."
      },
      {
        question: "Do I need to pay for the return shipment if I return my order?",
        answer: "We at Titan Company Limited will arrange for the return shipment to be collected and you do not need to make any payment for the courier. For International Orders, please check the International Order section under Return policy."
      },
      {
        question: "Are there certain products which are not eligible for return?",
        answer: "We are committed for ensuring, full customer satisfaction, security and customer assistance with respect to the products available on our website. However, if you are not happy with the product, you can choose to return the product unused and in the same condition as you received it."
      },
      {
        question: "How do I return my order?",
        answer: "The order can be returned within 7 days for MK product and 30 days for Mia product from the date you received the product. You need to call the customer care on 1800-266-0123 or email us at ecomsupport@titan.co.in stating that you want to return the product. The contact details of our logistic partner will be shared with you. You need to co-ordinate with them for return shipping."
      },
      {
        question: "Can I return the product bought from mkjewels.co.in at any physical store of Titan Company?",
        answer: "No, you can’t return any product bought from www.mk.co.in at any physical store of Titan Company."
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
                setOpenIndex(null); // reset FAQ state on category switch
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

export default Returns;
