import React from "react";
import { wxKey } from "./wx_keys.js";

export const WxContext = React.createContext();

class WxProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wx: {} };
  }

  componentDidMount = async () => {
    const url = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${wxKey}`;
    let wx = {};
    try {
      wx = await fetch(url);
      this.setState({ wx });
    } catch (e) {
      console.error("API FART!!!");
    }
  };

  render() {
    const { wx } = this.state;
    const { children } = this.props;
    return <WxContext.Provider value={wx}>{children}</WxContext.Provider>;
  }
}

export default WxProvider;
