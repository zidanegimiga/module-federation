import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const bodyStyles = {
  flex: "1",
  padding: "32px 48px"
}

const App = () => {
  const Layout = React.lazy(()=> import ("home/Layout"));

  return (
    <>
      <Suspense fallback={()=> <>Loading....</>}>
        <Layout>
          <div style={bodyStyles}>
            <div>Products App</div>
            <div>Language: JavaScript</div>
          </div>
        </Layout>
      </Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
