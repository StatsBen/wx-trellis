import React from "react";

class WxFacet extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    const { wx, name } = this.props;
    console.log(wx);
    return (
      <div className="wx-facet">
        <h2>{name}</h2>
      </div>
    );
  }
}

export default WxFacet;
