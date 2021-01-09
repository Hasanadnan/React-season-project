import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loder from "./Loder";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //lifecycle method used
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //helper method
  borderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error Message: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loder message="Please allow your location" />;
  }
  //React says we have to dfine render
  render() {
    return <div className="border red">{this.borderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
