import React from 'react'

import './Month.css'

import Daytable from '../Daytable/Daytable'
import Day from '../Day/Day'
import Modal from '../Modal/Modal'

/* 
  A stateful component that will track Modal state:
  - isOpen
*/
export default class Month extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isopen: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  // Handle open Modal.
  handleOpenModal = e => this.setState({isopen: true})

  // Handle close Modal.
  handleCloseModal = e => this.setState({isopen: false})

  // Create the days of the month.
  handleCreateMonth = () => {
    // Store each day of the month.
    let daysList = []

    // Loop to create each day as many times as numDays.
    for (let i = 1; i <= this.props.monthNumDays; i ++) {
      const getDays = new Date(this.props.monthName + ' ' + i + ', ' + this.props.year).getDay()

      // Build the month calendar.
      daysList.push(<Day 
        key={`${i}`} 
        year={this.props.year} 
        month={this.props.monthName} 
        date={`${i}`} 
        day={`${getDays}`}
        openModal={(e) => this.handleOpenModal(e)}
        />)
    }

    // Get the first day of each month.
    let getFirstDayOfMonth = new Date(this.props.monthName + ' 1 , ' + this.props.year).getDay()

    // Check if the first day is not a Sunday.
    if (getFirstDayOfMonth > 0) {

      // Add the required extra dummy days to align the days of the month with their days of the week.
      for (let e = 0; e < getFirstDayOfMonth; e ++) {
        daysList.unshift(<Day />)
      }
    }

    return daysList
  }
  render () {
    return (
      <div className="Month">
        {
          this.state.isopen && <Modal closeDialog={this.handleCloseModal}/>
        }
        <h3>{this.props.monthName}</h3>
        <Daytable />
        <div className="month-container">
        {
          this.handleCreateMonth()
        }
        </div>
      </div>
    )
  }
}
