import React from 'react'
import { Navigate, Route, Routes } from "react-router";
import Home from '../pages/home/Home';
import NavBar from './NavBar';
import PageNotFound from '../PageNotFound';
import Gold from '../pages/gold/Gold';
import Diamond from '../pages/diamond/diamond';
import Earrings from '../pages/earrings/Earrings';
import Rings from '../pages/rings/Rings';
import Dailywear from '../pages/dailywear/Dailywear';
import Collections from '../pages/collections/collections';
import Wedding from '../pages/wedding/wedding';
import Gifting from '../pages/gifting/Gifting';
import More from '../pages/more/More';
import Footer from '../pages/footer/Footer';
import DeliveryInformation from '../pages/footerpages/DeliveryInformation';
import InternationalShipping from '../pages/footerpages/InternationalShipping';
import PaymentOptions from '../pages/footerpages/PaymentOptions';
import TrackOrder from '../pages/footerpages/TrackOrder';
import Returns from '../pages/footerpages/Returns';
import Offers from '../pages/footerpages/Offers';
import HelpFaqs from '../pages/footerpages/HelpFaqs';
import AboutUs from '../pages/footerpages/AboutUs';
import ProductDetail from '../pages/productdetails/ProductDetail';
import CartDetails from '../pages/cartdetails/CartDetails';
function MainNavbar() {
  
  return (
    <>
      <NavBar />
      <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="gold" element={<Gold/>} />
          <Route path="diamond" element={<Diamond/>} />
          <Route path="earrings" element={<Earrings/>} />
          <Route path="rings" element={<Rings/>} />
          <Route path="dailywear" element={<Dailywear/>} />
          <Route path="collections" element={<Collections/>} />
          <Route path="wedding" element={<Wedding/>} />
          <Route path="gifting" element={<Gifting/>} />
          <Route path="cart" element={<CartDetails/>} />
          <Route path="more" element={<More/>} />
         
        <Route path="*" element={<PageNotFound/>}/>

        <Route path="delivery-information" element={<DeliveryInformation/>}/>
        <Route path="international-shipping" element={<InternationalShipping/>}/>
        <Route path="payment-options" element={<PaymentOptions/>}/>
        <Route path="track-order" element={<TrackOrder/>}/>
        <Route path="returns" element={<Returns/>}/>
        <Route path="offers" element={<Offers/>}/>
        <Route path="helpfaqs" element={<HelpFaqs/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>

        <Route path="product/:id" element={<ProductDetail />} />

        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default MainNavbar;