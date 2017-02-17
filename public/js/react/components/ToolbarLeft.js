import React, { Component } from "react";

export const ToolbarLeftComponent = React.createClass({
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
      
			<div className="headerbar-left">
				<ul className="header-nav header-nav-options">
					<li className="header-nav-brand" >
						<div className="brand-holder">
							<a href="../../html/dashboards/dashboard.html">
								<span className="text-lg text-bold text-primary">MATERIAL ADMIN</span>
							</a>
						</div>
					</li>
					<li>
						<a className="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
							<i className="fa fa-bars"></i>
						</a>
					</li>
				</ul>
			</div>
    )
  }
})