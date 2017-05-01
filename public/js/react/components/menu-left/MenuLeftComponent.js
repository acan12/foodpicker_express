import React, { Component } from "react";
import { MenuLeftMerchantSubComponent } from "./MenuLeftMerchantSubComponent";
import { MenuLeftUIElementSubComponent } from './MenuLeftUIElementSubComponent';

export const MenuLeftComponent = React.createClass({

    // react standard method
    getInitialState: function () {
        console.log("MENU_LEFT getInitialState")
        return {list: []}
    },

    // react standard method
    componentDidMount: function(){
        console.log("MENU_LEFT componentDidMount")
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
          	<MenuLeftMerchantSubComponent />
            <MenuLeftUIElementSubComponent />
          </ul>
        </div>
      )
    }
})
