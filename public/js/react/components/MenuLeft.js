import React, { Component } from "react";

export const MenuLeftComponent = React.createClass({
  
    // react standard method
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
          <ul id="main-menu" className="gui-controls">
          	<li>
          		<a href="../../html/dashboards/dashboard.html" className="active">
          			<div className="gui-icon"><i className="md md-home"></i></div>
          			<span className="title">Dashboard</span>
          		</a>
          	</li>
          	<li className="gui-folder">
          		<a>
          			<div className="gui-icon"><i className="md md-email"></i></div>
          			<span className="title">Merchant</span>
          		</a>
          		<ul>
          			<li><a href="/#/app/about" ><span className="title">Customers</span></a></li>
          			<li><a href="/#/app/main" ><span className="title">Order</span></a></li>
          			<li><a href="../../html/mail/reply.html" ><span className="title">Promos</span></a></li>
          			<li><a href="../../html/mail/message.html" ><span className="title">History</span></a></li>
          		</ul>
          	</li>
          </ul>

        </div>
      )
    }
})
