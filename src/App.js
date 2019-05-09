import React from "react";
import ReactDOM from "react-dom";
import WxProvider from "./WxProvider";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>IT WORKS, MOTHERFUkER!!!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <WxProvider>
    <App />
  </WxProvider>,
  document.getElementById("root")
);
