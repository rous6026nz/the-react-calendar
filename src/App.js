import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';

import Panel from './Panel/Panel'
import Calendar from './Calendar/Calendar'
import Footer from './Footer/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: new Date().getFullYear()
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
          <div className="top-section-container">
            <div className="year-stepper">
              <button onClick={this.handleYearSelectClick} value="previous">-</button>
              <h2>{this.state.year}</h2>
              <button onClick={this.handleYearSelectClick} value="next">+</button>
            </div>
            <Panel />
          </div>
        </div>
        <Calendar currentYear={this.state.year} />
        <Footer />
      </div>
    )
  }
}

export default App
