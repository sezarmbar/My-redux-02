
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const WeatherMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat:props.lat, lng:props.lon }}
  />
));


export default class WeatherMaps extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <WeatherMap lat={this.props.lat} lon={this.props.lon}
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}