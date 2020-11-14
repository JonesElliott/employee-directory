import React, { Component } from 'react';
// import logo from './logo.svg';
import Table from '../src/components/table/table';
import Buttons from '../src/components/buttons/buttons';
import API from "./utils/Api";
import './App.css';

class EmployeeResults extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees() {
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
          <Buttons />
        </header>
        <div className="test">
          <section className="TableSection">
            <Table results={this.state.results} />
          </section>
        </div>
      </div>
    );
  }
}

export default EmployeeResults;
