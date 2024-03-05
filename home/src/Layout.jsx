import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const applicationLayout = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const Layout = ({children}) => {
  return (
    <div className="" style={applicationLayout}>
    <Header/>
    {children}
    <Footer/>
  </div>
  )
};

export default Layout;
