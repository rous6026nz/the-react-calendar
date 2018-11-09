import React from 'react'

import './Day.css'

// Stateless component.
const Day = props => {

  let isCurrent = ''

  // Get the actual date today.
  const currentDay = new Date().toLocaleString().split(',')[0]

  // Get the current day element.
  const isToday = new Date(props.month + ' ' + props.date + ', ' + props.year).toLocaleString().split(',')[0]

  if (currentDay === isToday) {
    isCurrent = 'current'
  }

  return (
    <div className='Day' onClick={props.openModal}>
      <div className={`circle ${isCurrent}`}>
        {props.date}
      </div>
    </div>
  )
}

export default Day