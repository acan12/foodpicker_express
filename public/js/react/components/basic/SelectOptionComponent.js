import React, { Component } from 'react';

export const SelectOptionComponent = (props) => {
  return (
    <div className="form-group">
      <select id="gender" name="gender" className="form-control">
        <option value="">&nbsp;</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="gender">Gender</label>
    </div>
  )
}
