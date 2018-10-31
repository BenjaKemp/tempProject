import React, { Component } from "react";
import SearchResults from './SearchResults'
import {TaxiFilter} from '../filters/filter'
import {CarsFilter} from '../filters/filter'
import { Button, SplitButton } from "react-bootstrap";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: "",
      interior: "",
      exterior: ""
    };
  }

  onInteriorChange = e => {
    this.setState({ interior: e.target.value });
  };
  onExteriorChange = e => {
    this.setState({ exterior: e.target.value });
  };
  onActiveChange = e => {
    this.setState({ isActive: e.target.value });
  };



  render() {
    return (
      <div>
      <div className="search-bar">
        <div className="header-container">
        <header className="header">Locate a taxi!</header>
      <div className="one-line-flex">
        <label>
        </label>
        <label>
          MyTaxi <br/>
                 Is Active:
        <select
          className="button-filter"
          value={this.state.isActive}
          onChange={this.onActiveChange}
          required
        >
          <option value={null} />
          <option value="ACTIVE">Yes</option>
          <option value="INACTIVE">No</option>
        </select>
      </label>
<label>
  Cars2Go<br/>
  Acceptable Interior:
        <select
          className="button-filter"
          value={this.state.interior}
          onChange={this.onInteriorChange}
          required
        >
          <option value={null} />
          <option value="GOOD">Yes</option>
          <option value="UNACCEPTABLE">No</option>
        </select>
      </label>
      <label>
        Acceptable Exterior:
        <select
          className="button-filter"
          value={this.state.exterior}
          onChange={this.onExteriorChange}
          required
        >
          <option value={null} />
          <option value="GOOD">Yes</option>
          <option value="UNACCEPTABLE">No</option>
        </select>
      </label>
      </div>
    </div>
  </div>
    <SearchResults mytaxi={TaxiFilter(this.props.mytaxi.poiList, this.state)} car2go={CarsFilter(this.props.car2go.placemarks, this.state)} />
    </div>
    );
  }
}
