import React from "react";

class TrellisControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="trellis-controls">
        <span>Trellis Controls</span>
        <form id="controls-form">
          <label htmlFor="zoom"> </label>
          <input type="button" name="zoom" value="zoom" />
        </form>
      </div>
    );
  }
}

export default TrellisControls;
