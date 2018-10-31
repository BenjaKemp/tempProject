 /*global google*/

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import beachflag from '../assets/beachflag.png'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
    center: {
      lat: 53.55803149877005,
      lng: 9.97
    },
  };
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};
  renderTaxiMarkers() {
  return this.props.taxi.map(car => {
      return (
        <Marker
          animation= {this.props.animateId === car.id  ? this.props.google.maps.Animation.BOUNCE : null}
          onClick={this.onMarkerClick}
          name={`highlighted taxi id: ${car.id}`}
          position={{
            lat: car.coordinate.latitude,
            lng: car.coordinate.longitude
          }}
        />
      );
    });
  };
  renderCarsMarkers(){
    return this.props.car.map(car => {
        return (
          <Marker
            animation= {this.props.animateId === car.id ? this.props.google.maps.Animation.BOUNCE : null}
            onClick={this.onMarkerClick}
            name={car.address}
            position={{
              lat: car.coordinates[1],
              lng: car.coordinates[0]
            }}
            Icon={beachflag}

          />
        );
      });
  }
  render() {
    return (
      <div style={{ height: '625px', width: '955px',  position: 'relative'}}>
      <Map
        style={{ height: '625px', width: '955px', position: 'relative' }}
        google={this.props.google}
        zoom={14}
        initialCenter={this.state.center}
      >
        {this.renderTaxiMarkers()}
        {this.renderCarsMarkers()}

        <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <h1>{this.state.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
      </Map>
    </div>
    );
  }
}
const LoadingContainer = (props) => (
  <div>Loading.....</div>
)

export default GoogleApiWrapper({
  apiKey: "AIzaSyCH9WITHWhq7y89ctwLqhgDrb-8J3910DM",
  LoadingContainer: LoadingContainer
})(MapContainer);
