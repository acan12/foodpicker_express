import React, { Component } from 'react';
import { SelectOptionComponent } from './basic/SelectOptionComponent'
import { InputTextComponent } from './basic/InputTextComponent'

export const FormComponent = (props) => {

    return (
        <div>

          <div className="modal fade" id="newTaskForm" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header" style={{"borderBottom": "0px"}}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h2 className="modal-title" id="myModalLabel">Add Item</h2>
                </div>
                <form className="form" onSubmit={ (event) => props.onHandleSubmit(event) }>
                  <div className="modal-body" style={{"padding": "18px"}}>

										<InputTextComponent label="Topic" />
										<div className="form-group">
											<input type="text" className="form-control" id="question" />
											<label htmlFor="question">Question</label>
										</div>
                    <div className="form-group">
											<input type="text" className="form-control" id="answer" />
											<label htmlFor="answer">Answer</label>
										</div>
										<SelectOptionComponent />

                  </div>
                  <div className="modal-footer" style={{"borderTop": "0px"}}>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <input type="submit" className="btn btn-primary" value="Save changes" />
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>


      );

}
