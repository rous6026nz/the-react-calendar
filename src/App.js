import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';

import Calendar from './Calendar/Calendar'
import Footer from './Footer/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: 2017
    }
    this.handleYearSelectClick = this.handleYearSelectClick.bind(this)
  }

  // Handle year select.
  handleYearSelectClick = (e) => {
    let currentVal = this.state.year
    // Check whether to increment or decrement the year.
    if (e.target.value === 'next') {
      this.setState({
        year: currentVal + 1
      })
    } else {
      this.setState({
        year: currentVal - 1
      })
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-title">The React Calendar</h1>
        </header>
        <div className="top-section">
          <button onClick={this.handleYearSelectClick} value="previous">-</button>
          <h2>{this.state.year}</h2>
          <button onClick={this.handleYearSelectClick} value="next">+</button>
        </div>
        <Calendar currentYear={this.state.year} />
        <Footer />
      </div>
    )
  }
}

export default App
