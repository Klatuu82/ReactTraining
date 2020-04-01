import React from 'react';
import './Char.css';

const char = (props) => {
  return(
      <div className="Char" onClick={props.click}>
          <p onClick={props.click}>{props.inputChar}</p>
      </div>
  )
};

export default char;