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
          <Route path="more" element={<More/>} />
         
        <Route path="*" element={<PageNotFound/>}/>
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default MainNavbar;