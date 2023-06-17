import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

// Components composition
const HeadingComponent = () => (
  <React.Fragment>
    <div id="container">
      {/*{Title()}*/}
      <Title />
      <h1 className="heading">Namaste React using functional components</h1>
    </div>
    <div id="container-2"></div>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
