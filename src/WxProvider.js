import React from "react";
import { wxKey } from "./wx_keys.js";

export const WxContext = React.createContext();

class WxProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wx: [] };
  }

  componentDidMount = async () => {
    // [lon-left,lat-bottom,lon-right,lat-top,zoom]
    let lat = 51;
    let lon = -118;
    let cnt = 9;
    const url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cnt}&APPID=${wxKey}`;
    let wx = {};
    try {
      let response = await fetch(url);
      let text = await response.text();
      wx = JSON.parse(`${text}`);
      if (wx.list) {
        this.setState({ wx: wx.list });
      }
      console.log(wx);
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
