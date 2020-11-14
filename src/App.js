import React, { Component } from 'react';
import TableBody from '../src/components/table/tablebody';
import Buttons from '../src/components/buttons/buttons';
import API from "./utils/Api";
import compareNames from './utils/compareNames';
import './App.css';

class EmployeeResults extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    this.retrieveEmployeeData();
  }

  retrieveEmployeeData() {
    API.search()
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React Employee Directory
          </p>
          <p className="App-link">
            Employee management at your finger tips
          </p>
        </header>
        <div className="test">
          <section className="TableSection">
            <TableBody results={this.state.results} />
          </section>
        </div>
      </div>
    );
  }
}

export default EmployeeResults;
