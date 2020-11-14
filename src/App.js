import React, { Component } from 'react';
import TableBody from '../src/components/table/tablebody';
import Buttons from '../src/components/buttons/buttons';
import API from "./utils/Api";
import compareNames from './utils/compareNames';
import './App.css';

class EmployeeResults extends Component {

  state = {
    results: [],
    filteredEmployees: this.results,
    sortedEmployees: this.filteredEmployees,
    filterState: "",
    sortDirection: 1
  };


  retrieveEmployeeData() {
    API.search()
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  }

  componentDidMount() {

    this.retrieveEmployeeData();

    let filteredRecords = this.state.results;
    if (this.filterState !== '') {
      filteredRecords = this.state.results.filter(employeeRecord => {
        return employeeRecord.name.first.startsWith(this.state.filterState)
        || employeeRecord.name.last.startsWith(this.state.filterState);
      })
    }
    
    this.setState({ filteredEmployees: filteredRecords });

    const filteredEmployeesCopy = this.state.results;
    filteredEmployeesCopy.sort(compareNames(this.state.sortDirection));
    this.setState({ soretedEmployees: filteredEmployeesCopy });
  }

  onFilterChange(event) {
      const { value } = event.target;
      this.setState({ filterState: value });
  }

  toggleSortDirection(event) {
      event.preventDefault();
      event.stopPropagation();
      this.state.setState({ sortDirection: -1 * this.state.sortDirection });
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
            <TableBody results={this.state.results} toggleSortDirection={this.toggleSortDirection}/>
          </section>
        </div>
      </div>
    );
  }
}

export default EmployeeResults;
