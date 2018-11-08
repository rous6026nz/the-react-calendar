import React from 'react'
// import { ModalContainer, ModalDialog } from 'react-modal-dialog'

import './Month.css'

import Daytable from '../Daytable/Daytable'
import Day from '../Day/Day'

/* 
  A stateful component that will store calendar month event information:
  - calendar events i.e holidays, birthday, busy, anniversaries
  - number of days in the month
*/
export default class Month extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      calendarEvent: '',
      showModal: false
    }
    this.handleAddEvent = this.handleAddEvent.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  // Handle opening modal dialog.
  handleOpenModal = () => this.setState({ showModal: true })

  // Handle closing modal dialog.
  handleCloseModal = () => this.setState({ showModal: false })

  // Handle adding the event to the day.
  handleAddEvent = e => console.log(e.target)

  // Create the days of the month.
  handleCreateMonth () {
    // Store each day of the month.
    let daysList = []

    // Loop to create each day as many times as numDays.
    for (let i = 1; i <= this.props.monthNumDays; i ++) {
      const getDays = new Date(this.props.monthName + ' ' + i + ', ' + this.props.year).getDay()

      daysList.push(<Day 
        key={`${i}`} 
        year={this.props.year} 
        month={this.props.monthName} 
        date={`${i}`} 
        day={`${getDays}`} 
        onClick={this.handleOpenModal}
        />)
    }

    // Get the first day of each month.
    const getFirstDayOfMonth = new Date(this.props.monthName + ' 1 , ' + this.props.year).getDay()

    // Check if the first day is not a Sunday.
    if (getFirstDayOfMonth > 0) {

      // Add the required extra dummy days to align the days of the month with their days of the week.
      for (let e = 0; e < getFirstDayOfMonth; e ++) {
        daysList.unshift(<Day />)
      }
    }
    return daysList
  }

  render() {
    return (
      <div className="Month">
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