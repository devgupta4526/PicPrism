import React, { useEffect, useRef } from "react";
import {Routes, Route, useLocation} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import SellerDashBoard from "../pages/SellerDashBoard"
import BuyerDashBoard from "../pages/BuyerDashBoard"
import gsap from "gsap"
import toast, {Toaster} from "react-hot-toast"


const GsapTransition = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        if(nodeRef.current){
          gsap.fromTo(nodeRef.current, {opacity : 0}, {opacity : 1, duration : 1});
          toast.success(location.pathname)
        }
    },[location])
    
    
  return (
    <div ref = {nodeRef}>
      <Toaster/>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/seller/profile" element={<SellerDashBoard />} />
          <Route path="/buyer/profile" element={<BuyerDashBoard />} />
        </Routes>
    </div>
  );
};

export default GsapTransition;
