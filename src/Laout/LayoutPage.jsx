import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
function LayoutPage() {
  return (
    <div className="max-w-screen-xl mx-auto rounded-2xl">
      <div>
      <Navbar />
    
    <div className="p-2 border drawer-content bg-slate-200">
      <div className="">
        <Outlet />
      </div>
    </div>
      </div>
     
      
    </div>
  );
}

export default LayoutPage;
