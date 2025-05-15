import React from 'react'
       import { Navigate, Route, Routes } from "react-router";
import Home from '../pages/home/Home';
import NavBar from './NavBar';
import PageNotFound from '../PageNotFound';
import Gold from '../pages/gold/Gold';
function MainNavbar() {
  
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gold" element={<Gold/>} />
         
        <Route path="/*" element={<PageNotFound/>}/>
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default MainNavbar;