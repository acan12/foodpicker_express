import React, { Component } from "react"

export const ContentTaskList2Component = React.createClass({
  getInitialState: function () {
      console.log("initial state")
      return {list: []}
  },

  // react standard method
  componentDidMount: function(){
      console.log("initial state")
  },

  render: function(){
    return (
      <div>
        <div className="section-body col-md-5">
	        <div className="row">
						<div className="card">
							<div className="card-body">
							  <h3>ABOUT</h3>

							</div>
						</div>
						<em className="text-caption">Default table</em>
					</div>
  			</div>
  		</div>
    )
  }
})
