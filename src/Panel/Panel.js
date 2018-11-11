import React from 'react'

import './Panel.css'

const Panel = props => {
  return (
    <div className="Panel">
      <ul className="Panel-container">
        <li><span className="swatch anniversary"></span>Anniversary</li>
        <li><span className="swatch birthday"></span>Birthday</li>
        <li><span className="swatch busy"></span>Busy</li>
        <li><span className="swatch holiday"></span>Holiday</li>
      </ul>
    </div>
  )
}

export default Panel