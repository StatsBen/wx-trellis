import React from "react";
import WxFacet from "./WxFacet";
import { WxContext } from "./WxProvider";

class WxTrellis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Faceted Wx</h2>
        <WxContext.Consumer>
          {wx =>
            wx.map(location => <WxFacet {...location} key={location.id} />)
          }
        </WxContext.Consumer>
      </div>
    );
  }
}

export default WxTrellis;
