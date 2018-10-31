import React, { Component } from "react";
import SingleTaxi from "./SingleTaxi";
import SingleCar from "./SingleCar";
import MapWithAMarker from '../container/mapthings'


class SearchResults extends Component {

  state = {
    id: 0,
  }


onHandleHover = (id) => {
this.setState({id})
}


  renderList() {

  const carArray =  this.props.car2go.map((result, index) => {
      return (
          <SingleCar key={result.id} {...result}  onHandleHover={this.onHandleHover}/>
      );
    });
    const taxiArray = this.props.mytaxi.map((result, index) => {
      return (
          <SingleTaxi key={result.id} {...result} onHandleHover={this.onHandleHover}/>
      );
    });
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <div className="list-containers">
      <div>myTaxi:{taxiArray}</div>
      </div>
      <div className="list-containers">
      <div>cars2Go:{carArray}</div>
      </div>
    </div>
    )
  }
  render() {

    return (
      <div className="list-map-container">

          {this.renderList()}
          <MapWithAMarker
          taxi={this.props.mytaxi}
          animateId={this.state.id}
          car={this.props.car2go}
          />
        </div>


    );
  }
}

export default SearchResults
