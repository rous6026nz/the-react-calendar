import React from 'react'

import './Calendar.css'
import Month from '../Month/Month'

// Stateless component.
const Calendar = props => {
  
  const months = [
    {id: 1, monthName: 'January', numDays: 31},
    {id: 2, monthName: 'February', numDays: 28},
    {id: 3, monthName: 'March', numDays: 31},
    {id: 4, monthName: 'April', numDays: 30},
    {id: 5, monthName: 'May', numDays: 31},
    {id: 6, monthName: 'June', numDays: 30},
    {id: 7, monthName: 'July', numDays: 31},
    {id: 8, monthName: 'August', numDays: 31},
    {id: 9, monthName: 'September', numDays: 30},
    {id: 10, monthName: 'October', numDays: 31},
    {id: 11, monthName: 'November', numDays: 30},
    {id: 12, monthName: 'December', numDays: 31}
  ]

  return (
    <div className="Calendar">
      {
        months.map( month => <Month key={month.id} year={props.currentYear} monthName={month.monthName} monthNumDays={month.numDays}/>)
      }
    </div>
  )
}

export default Calendar