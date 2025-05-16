import React from "react";
import "./offers.css";

function Offers() {
  return (
    <div className="tanishq-container">
      <h1 className="tanishq-title">Tanishq Gold Exchange Offer</h1>
      <p className="tanishq-text">
        <strong>Offer period :</strong> 1st May 2025 to 31st May 2025
      </p>
      <p className="tanishq-text">
        <strong>Region :</strong> Pan India
      </p>
      <p className="tanishq-text">
        <strong>Applicable Product Groups :</strong> This offer is applicable for
        below mentioned jewellery purchase at Tanishq stores across India.
        Please contact your nearest Tanishq store for any further detail.
      </p>
      <ol className="tanishq-list">
        <li>
          Gold Plain, Gold Plain UCP, CZ Jewellery, Glass Kundan, Kundan Polki,
          Open Polki, Plain Jewellery With Stones, Jewellery with coloured
          Stone, Mangalsutra, Platinum Plain, Ultra Low Diamond Product, Gold
          Intensive Studded
        </li>
        <li>
          Gold Studded, HV Studded, Studded Solitaire, Platinum Studded,
          Studded UCP, Bi metal Platinum Studded, Mia Studded
        </li>
      </ol>
      <p className="tanishq-warning">
        This offer is NOT APPLICABLE for Gold Coins, Silver Items & Coins, Loose
        diamonds and stones.
      </p>

      <h2 className="tanishq-subheading">Offer Structure:</h2>
      <div className="tanishq-table-container">
        <table className="tanishq-table">
          <thead>
            <tr>
              <th rowSpan={2}>Karat</th>
              <th colSpan={2}>Purity</th>
              <th rowSpan={2}>Existing GEP Policy</th>
              <th rowSpan={2}>Plain Group Jewellery Purchase (Deduction)</th>
              <th rowSpan={2}>Studded Jewellery Purchase (Deduction)</th>
            </tr>
            <tr>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&gt;=22K</td>
              <td>91.25</td>
              <td>99.99</td>
              <td>2%</td>
              <td>0%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>21–22K</td>
              <td>87.50</td>
              <td>91.24</td>
              <td>4%</td>
              <td>2%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>20–21K</td>
              <td>83.33</td>
              <td>87.49</td>
              <td>6%</td>
              <td>3%</td>
              <td>3%</td>
            </tr>
            <tr>
              <td>18–20K</td>
              <td>75.00</td>
              <td>83.32</td>
              <td>8%</td>
              <td>4%</td>
              <td>4%</td>
            </tr>
            <tr>
              <td>9–18K</td>
              <td>37.50</td>
              <td>74.99</td>
              <td>8%</td>
              <td>4%</td>
              <td>4%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="tanishq-subheading tanishq-underline">Billing Instructions:</h2>
      <ol className="tanishq-list">
        <li>
          This offer can be clubbed with the below offer
          <ul>
            <li>Festival of Diamonds Jan–Mar FY25</li>
            <li>Shubh Vivaah Offer</li>
            <li>Plain & Studded Wedding Bundling Offer</li>
            <li>Best Deal products</li>
            <li>GHS/e-GHS</li>
            <li>Gift Vouchers/Gift Cards</li>
            <li>Anuttara/Encircle Points</li>
            <li>Birthday/Anniversary discount</li>
            <li>Studded Solitaire products</li>
            <li>Best Gold Rate offer</li>
            <li>Entry Complexity products</li>
            <li>Tata & Titan Employee Discount (Titan employee discount coupon)</li>
            <li>Shaurya Discount</li>
          </ul>
        </li>
        <li>
          This offer cannot be clubbed with
          <ul>
            <li>TSSS</li>
            <li>Franchisee entitlement discount</li>
          </ul>
        </li>
        <li>
          For Advance/Customer Orders, the GEP must be made during the GEP offer period.
          Orders taken before the offer period are not eligible for this offer
          if GEP is done before/after the offer period.
        </li>
        <li>
          Customer's Final Purchase value must be equal to or more than the Valuation
          of old Jewellery. No cash refund will be given.
        </li>
        <li>
          The Credit Note generated during the GEP/TEP Exchange after melting of customer's
          gold has to be used on the same day before the EOD process. Our customers will
          have to buy in full or place an order for the balance amount on the very same day
          and cannot reserve it for later.
        </li>
        <li>
          This offer is valid only in Tanishq store India, not available online.
        </li>
        <li>
          Titan Co Ltd reserves the right to change the offer without any prior communication.
        </li>
        <li>
          Making charges, taxes, and any discount given on the original invoice, will be
          deducted in full.
        </li>
      </ol>
    </div>
  );
}
export default Offers;