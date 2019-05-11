import React from "react";
import WxFacet from "./WxFacet";
import TrellisControls from "./TrellisControls";
import { WxContext } from "./WxProvider";
import "./facets-styles.css";

class WxTrellis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Faceted Wx</h2>
        <TrellisControls />
        <div id="wx-trellis">
          <WxContext.Consumer>
            {wx =>
              wx.map(location => <WxFacet {...location} key={location.id} />)
            }
          </WxContext.Consumer>
        </div>
      </div>
    );
  }
}

export default WxTrellis;
