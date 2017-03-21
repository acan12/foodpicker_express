import React, { Component } from "react";
import { MenuLeftMerchantComponent } from "./MenuLeftMerchant";
import { MenuLeftUIElementComponent } from './MenuLeftUIElement';

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
          	<MenuLeftMerchantComponent />
            <MenuLeftUIElementComponent />

          </ul>

        </div>


      )
    }
})
