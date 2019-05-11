import React from "react";
import ReactDOM from "react-dom";
import WxTrellis from "./WxTrellis";
import WxProvider from "./WxProvider";
import SoundingProvider from "./SoundingProvider";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { wx } = this.state;
    return (
      <div>
        <h1>IT 3ORkS</h1>
        <WxTrellis />
      </div>
    );
  }
}

ReactDOM.render(
  <SoundingProvider>
    <WxProvider>
      <App />
    </WxProvider>
  </SoundingProvider>,
  document.getElementById("root")
);
