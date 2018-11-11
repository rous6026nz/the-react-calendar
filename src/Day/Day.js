import React from 'react'

import './Day.css'

// Stateless component.
const Day = props => {

  let isCurrent = ''

  // Get the actual date today.
  const currentDay = new Date().toLocaleString().split(',')[0]

  // Get the current day element.
  const isToday = new Date(props.month + ' ' + props.date + ', ' + props.year).toLocaleString().split(',')[0]

  // Check if the current element is today.
  if (currentDay === isToday) {

    // Update the isCurrent variable. 
    isCurrent = 'current'
  }

  return (
    <div className='Day' id={props.id} onClick={props.openModal}>
      <div className={`circle ${isCurrent} ? ${isCurrent} : ${props.event}`}>
        {props.date}
      </div>
    </div>
  )
}

export default Day