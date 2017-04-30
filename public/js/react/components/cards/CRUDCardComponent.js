import React, { Component } from 'react';
import { FormComponent } from '../../components/FormComponent';
import { ListComponent } from '../../components/ListComponent';


export const CRUDCardComponent = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 style={ props.titleStyle }>{ props.title }</h3>
        <FormComponent onHandleSubmit={ props.onHandleSubmit }/>
        <button type="button" className="btn ink-reaction btn-raised btn-primary" onClick={ props.onHandleClick }>REFRESH</button>
        &nbsp;
        <button type="button" href="#newTaskForm" data-toggle="modal" className="btn ink-reaction btn-raised btn-primary">FORM</button>
        <ListComponent dataResources={ props.dataResources } />
      </div>
    </div>
  )
}
