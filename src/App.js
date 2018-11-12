import React, { Component } from "react";
import * as maps from "@google/maps";
class App extends Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }
  componentDidMount() {
    this.initMap();
    window.maps = maps;
    let googleMapsClient = maps.createClient({
      key: "AIzaSyA8YTM7M3Bym1Poicd0E3lCFxlc9UFKpaU"
    });
    window.googleMapsClient = googleMapsClient;
  }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -15.79, lng: -47.8929 },
      zoom: 4
    });
    console.log(map);
  }
  render() {
    return (
      <div className="App">
        <div id="map" style={{ width: "100%", height: "800px" }} />
      </div>
    );
  }
}

export default App;
