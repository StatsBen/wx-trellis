import React from "react";

class SoundingProvider extends React.Component {
  // componentDidMount = async () => {
  //   let sound = await fetch(
  //     "http://weather.uwyo.edu/cgi-bin/sounding?region=naconf&TYPE=TEXT%3ARAW&YEAR=2019&MONTH=05&FROM=0912&TO=0912&STNM=73033",
  //     { mode: "cors" }
  //   );
  //
  //   console.log(sound);
  //
  //   let result = await sound.text();
  //
  //   console.log(result);
  // };
  // TODO

  render() {
    let { children } = this.props;

    return <div>{children}</div>;
  }
}

export default SoundingProvider;
