import React, { useEffect, useState } from "react";
import "./productdetail.css";
import { useParams } from "react-router";
import {data} from "../data/datainfo";

const ProductDetail = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [productInfo, setProductInfo] = useState(data);
    const {id}=useParams();
    // console.log(id,data);
  // console.log(productInfo);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
      
  const infoproduct = data.find((value) => value.id == id); // returns single object
setProductInfo(infoproduct);
  },[id])
  // const productInfo = data.find((value) => value.id == id); // returns single object
  
  return (
    <>
    {/* {productInfo?JSON.stringify(productInfo):"no"} */}
    {productInfo? (<>
    {/* {productInfo?.name} */}
      <div className="container">
        <div className="product-header">
          <h1 className="product-title">{productInfo?.name}</h1>
          <p className="product-price">{productInfo?.price} <span className="dropdown">▾</span></p>
        </div>
      </div>

      <div className="info-container">
        <div className="info-left">
          <img
            src={productInfo?.imageurl}
            alt="Gold Earrings"
            className="earring-image"
          />
        </div>

        <div className="info-right">

          {/* METAL DETAILS */}
          <div className="accordion-item" onClick={() => toggle(0)}>
            <div className="accordion-header">
              <img src="/mk-jewels/public/images/176.png" alt="Metal Icon" className="accordion-icon" />
              <span>METAL DETAILS</span>
              <span className="dropdown">{activeIndex === 0 ? "▾" : "▸"}</span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-grid">
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.karatage}</strong>
                  <p>Karatage</p>
                </div>
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.material_colour}</strong>
                  <p>Material Colour</p>
                </div>
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.gross_weight}</strong>
                  <p>Gross Weight</p>
                </div>
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.metal}</strong>
                  <p>Metal</p>
                </div>
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.height}</strong>
                  <p>Height</p>
                </div>
                <div className="detail-box">
                  <strong>{productInfo?.metal_details?.width}</strong>
                  <p>Width</p>
                </div>
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="accordion-item" onClick={() => toggle(2)}>
            <div className="accordion-header">
              <img src="/mk-jewels/public/images/177.png" alt="Description Icon" className="accordion-icon" />
              <span>DESCRIPTION</span>
              <span className="dropdown">{activeIndex === 2 ? "▾" : "▸"}</span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-content">
                <p dangerouslySetInnerHTML={{ __html: productInfo.description }} />
              </div>
            )}
          </div>
        </div>

      </div>
      <div className="add-to-cart-container">
  <button className="add-to-cart-button">Add to Cart</button>
</div>
</>):"no data found"}
    </>
  );
};

export default ProductDetail;