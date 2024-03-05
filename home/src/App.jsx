import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";

const applicationLayout = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}

const bodyStyles = {
  flex: "1",
  padding: "32px 48px"
}

const App = () => (
  <Layout>
    <div className="" style={bodyStyles}>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
    </div>
  </Layout>
);
ReactDOM.render(<App />, document.getElementById("app"));
