import React from 'react'

import './Modal.css'

const Modal = props => {

  return (
    <div className="Modal">
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn" onClick={props.closeDialog}>Close X</div>
          <h1>Calendar Events</h1>
          <p>Please select which event you would like to assign to {props.date}.</p>
          <small>Note: Only one event can be assigned to a day at a time.</small>
          <ul className="event-list">
            <li>Birthday</li>
            <li>Holiday</li>
            <li>Busy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal