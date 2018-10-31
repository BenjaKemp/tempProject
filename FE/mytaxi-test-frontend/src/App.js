import React, { Component } from 'react';
import MyModal from './components/modal.js'

import SearchBar from './components/SearchBar'

import LoadingComponent from './components/LoadingSpinner'
import './App.css';

class App extends Component {

state = {
mytaxi: '',
car2go: ''
}

componentDidMount(){
  fetch(`http://localhost:5000/mytaxi/vehicles`)
            .then(res => res.json())
            .then(result => {
              this.setState({ mytaxi: result})
            })
            .catch(e => console.log(e));
  fetch(`http://localhost:5000/car2go/vehicles`)
            .then(res => res.json())
            .then(result => {
              this.setState({ car2go: result})
            })
            .catch(e => console.log(e));

}


  render() {

  return   this.state.mytaxi.length === 0 || this.state.car2go.length === 0  ?   <LoadingComponent/> :
   (
      <div className="container">
        <MyModal/>
        <SearchBar mytaxi={this.state.mytaxi} car2go={this.state.car2go} myFilter={this.myFilter}/>
      </div>
    );
  }
}

export default App;
