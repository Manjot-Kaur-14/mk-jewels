import React, { useState } from "react";
import "./delivery.css";
import PaymentOptions from "./PaymentOptions";

const DeliveryInformation = () => {
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
        question: "How can I know the status of my order?",
        answer:
          "All users have the option to track their orders by clicking on Track Order. The user has to enter the email address used while placing the order and the order number to track the order. Registered users can Signin and track their orders from order history section in the account page."
      },
      {
        question: "What happens if my order is lost in transit?",
        answer:
          "In the unlikely event that an order gets lost during transit, we wait for 15 days to track your lost order and if we are still unsuccessful, then we process your refund through the payment mode that you had opted for at the time of placing the order."
      },
      {
        question: "Where do you deliver within India?",
        answer:
          "Currently we deliver to selected cities within India. Please check if we deliver to your pincode/city by entering your it in the product page/shopping/cartcheckout page. If there is no courier service available in your area/city, we apologize for the inconvenience caused."
      },
      {
        question: "I live outside India. Can I order for something to be delivered in India?",
        answer:
          "Yes, you can order for something to be delivered in India as long as you provide a valid shipping address within India. Also, kindly note that we deliver only to selected cities within India. To check whether we deliver to your desired area/city kindly enter your pincode in the product page/shopping cart page/checkout page."
      },
      {
        question: "Do I need to pay shipping delivery charges?",
        answer:
          "There are no shipping/ delivery charges within India. For information on shipping charges for international orders please see the Shipping and Handling Charges section under Shipping Policy section"
      },
      {
        question: "How soon will I recieve my order?",
        answer:
          "The time taken for delivery tends to vary according to the destination; however, we make our best efforts to ensure that the domestic order is delivered within 5-7 working days of you placing the order. For international orders please see the Time to Deliver section under Shipping Policy section."
      },
      {
        question: "Do we need to show any ID Proof?",
        answer:
          "Certain Logistic partners may request for an ID proof while delivering the shipment. When the original recipient is not available and the shipment value is high, the delivery agent may request for ID proof from whomever is collecting the shipment at the mentioned address on behalf of the customer. This is to ensure correct and safe delivery of the product."
      },
      {
        question: "Do we need a PAN CARD?",
        answer:
          "For purchase above Rs. 2 lakhs, PAN card Number must be provided upon placing the order in the manner specified by Titan. Failure to provide the same shall result in cancellation of the order. For all domestic shipments, if the order value exceeds Rs 2 lakhs, the customer will need to enter the PAN card number and click on verify Pan card. Only upon PAN card verification the order will proceed ahead to the payment page. The billing name is supposed to be the same as the PAN card else the PAN card will not get verified and the customer will not be able to proceed ahead with the order."
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
                setOpenIndex(null); // Reset open state when category changes
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
        {activeCategory !== "Payment" && <h3>{activeCategory}</h3>}

        {activeCategory === "Payment" ? (
          <PaymentOptions />
        ) : faqs[activeCategory].length > 0 ? (
          faqs[activeCategory].map((faqItem, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <span>{faqItem.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faqItem.answer}</p>}
            </div>
          ))
        ) : (
          <p>No questions available for this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default DeliveryInformation;
