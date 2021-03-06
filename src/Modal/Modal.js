import React from 'react'

import './Modal.css'

const Modal = props => {

  // Format the month - day string.
  const formattedDate = props.target.split('_').join(' ')

  return (
    <div className="Modal">
      <div className="modal-background" onClick={props.closeDialog}></div>
      <div className="modal-container">
        <div className="close-btn" onClick={props.closeDialog}>Close X</div>
        <h1>Calendar Events</h1>
        <span className="date">{formattedDate} {props.year}</span>
        <p>Choose which event you would like to assign to:</p>
        <ul className="event-list">
          <li><div className="swatch anniversary" id="anniversary" onClick={props.addEvent}></div>Anniversary</li>
          <li><div className="swatch birthday" id="birthday" onClick={props.addEvent}></div>Birthday</li>
          <li><div className="swatch busy" id="busy" onClick={props.addEvent}></div>Busy</li>
          <li><div className="swatch holiday" id="holiday" onClick={props.addEvent}></div>Holiday</li>
          <li><div className="swatch clear" id="clear" onClick={props.addEvent}></div>Clear</li>
        </ul>
      </div>
    </div>
  )
}

export default Modal