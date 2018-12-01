import React from 'react';
import './Select.css'

const Select = ({type, onChangeHandler, children}) => {
  return (
    <select
      className="ChartSelect"
      name={type}
      onChange={(evt)=> onChangeHandler(evt, type)}
    >
      {children}
    </select>
  )
}

export default Select;