import React from 'react'

import './Month.css'

import Daytable from '../Daytable/Daytable'
import Day from '../Day/Day'
import Modal from '../Modal/Modal'

/* 
  A stateful component that will track Modal state:
  - isOpen
  - targetEl
  - calendarEvent
*/
export default class Month extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      daysList: [],
      isOpen: false,
      targetEl: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleAddEvent = this.handleAddEvent.bind(this)
  }

  // Handle open Modal.
  handleOpenModal = e => this.setState({isOpen: true, targetEl: e.currentTarget.id})

  // Handle close Modal.
  handleCloseModal = e => this.setState({isOpen: false})

  // Handle add event.
  handleAddEvent = (e, curElem) => {
    let newState = {...this.state}
    let elemId = curElem - 2

    // if (parseInt(curElem) === parseInt(this.state.daysList[curElem].key)) {
      if (e.target.id === 'clear') {
        
        newState.daysList = newState.daysList.slice()
        newState.daysList[elemId] = {...newState.daysList[elemId]}
        newState.daysList[elemId].event = 'clear'
        newState.isOpen = false
        this.setState(newState)
      } else {
        newState.daysList = newState.daysList.slice()
        newState.daysList[elemId] = {...newState.daysList[elemId]}
        newState.daysList[elemId].event = e.target.id
        newState.isOpen = false
        this.setState(newState)
      }
    // }
  }

  componentWillMount () {
    this.handleCreateMonth()
  } 

  // Create the days of the month.
  handleCreateMonth = () => {

    const daysArr = []

    // Loop to create each day as many times as numDays.
    for (let i = 1; i <= this.props.monthNumDays; i ++) {
      const getDays = new Date(this.props.monthName + ' ' + i + ', ' + this.props.year).getDay()

      daysArr.push({
        id: this.props.monthName + '_' + i,
        key: i, 
        year: this.props.year,
        month: this.props.monthName,
        date: i, 
        day: getDays,
        openModal: (e) => this.handleOpenModal(e),
        event: ''
      })
    }

    // Get the first day of each month.
    let getFirstDayOfMonth = new Date(this.props.monthName + ' 1 , ' + this.props.year).getDay()

    // Check if the first day is not a Sunday.
    if (getFirstDayOfMonth > 0) {

      // Add the required extra dummy days to align the days of the month with their days of the week.
      for (let e = 0; e < getFirstDayOfMonth; e ++) {
        daysArr.unshift(<Day />)
      }
    }

    // Update state.
    this.setState({daysList: daysArr})
  }

  render () {
    const elemId = this.state.targetEl.split('_')[1]

    const month = this.state.daysList.map(day => {
      return <Day 
              id={day.id}
              key={day.id}
              year={day.year}
              month={day.month}
              date={day.date}
              day={day.day}
              openModal={day.openModal}
              event={day.event} />
    })

    return (
      <div className="Month">
      {
        this.state.isOpen && 
        <Modal 
          closeDialog={this.handleCloseModal}
          target={this.state.targetEl ? this.state.targetEl : null}
          targetId={elemId}
          year={this.props.year}
          addEvent={this.handleAddEvent}
          />
      }
        <h3>{this.props.monthName}</h3>
        <Daytable />
        <div className="month-container">
        {
          month
        }
        </div>
      </div>
    )
  }
}
