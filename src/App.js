import React from "react";
import ReactDOM from "react-dom";
import WxProvider from "./WxProvider";
import { WxContext } from "./WxProvider";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { wx } = this.state;
    return (
      <div>
        <h1>IT WORKS, MOTHERFUkER!!!</h1>
        <WxContext.Consumer>
          {wx => {
            return <span>{JSON.stringify(wx)}</span>;
          }}
        </WxContext.Consumer>
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
