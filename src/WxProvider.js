import React from "react";
import { wxKey } from "./wx_keys.js";

export const WxContext = React.createContext();

class WxProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wx: {} };
  }

  componentDidMount = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${wxKey}`;
    let wx = {};
    try {
      let response = await fetch(url);
      let text = await response.text();
      wx = JSON.parse(`${text}`);
      console.log(wx);
      this.setState({ wx });
      // console.log(JSON.parse(wx.body));
    } catch (e) {
      console.error("API FART!!!");
      console.error(e);
    }
  };

  render() {
    const { wx } = this.state;
    const { children } = this.props;
    return <WxContext.Provider value={wx}>{children}</WxContext.Provider>;
  }
}

export default WxProvider;
