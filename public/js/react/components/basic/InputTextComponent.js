import React, { Component } from 'react';

export const InputTextComponent = (props) => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" id={props.label} />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}
