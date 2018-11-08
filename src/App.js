import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';

import Calendar from './Calendar/Calendar'
import Footer from './Footer/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: '2018'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-title">The React Calendar</h1>
        </header>
        <h2>{this.state.year}</h2>
        <Calendar />
        <Footer />
      </div>
    )
  }
}

export default App
