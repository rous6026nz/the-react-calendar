import React from 'react'

import './Day.css'

// Stateless component.
const Day = props => {

  const curDate = new Date().toLocaleString().split(',')[0]
  const curDay = new Date(props.month + ' ' + props.date + ', ' + props.year).toLocaleString().split(',')[0]
  let isCurrent = ''
  if (curDate === curDay) isCurrent='current'

  return (
    <div className='Day' onClick={props.addEvent}>
      <div className={`circle ${isCurrent}`}>
        {props.date}
      </div>
    </div>
  )
}

export default Day