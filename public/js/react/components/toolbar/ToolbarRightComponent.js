import React, { Component } from "react";

export const ToolbarRightComponent = React.createClass({
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
        <div className="headerbar-right">
        	<ul className="header-nav header-nav-options">
        		<li>
        			<form className="navbar-search" role="search">
        				<div className="form-group">
        					<input type="text" className="form-control" name="headerSearch" placeholder="Enter your keyword" />
        				</div>
        				<button type="submit" className="btn btn-icon-toggle ink-reaction"><i className="fa fa-search"></i></button>
        			</form>
        		</li>
        		<li className="dropdown hidden-xs">
        			<a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
        				<i className="fa fa-bell"></i><sup className="badge style-danger">4</sup>
        			</a>
        			<ul className="dropdown-menu animation-expand">
        				<li className="dropdown-header">Today messages</li>
        				<li>
        					<a className="alert alert-callout alert-warning" href="javascript:void(0);">
        						<img className="pull-right img-circle dropdown-avatar" src="/static/img/avatar2.jpg?1404026449" alt="" />
        						<strong>Alex Anistor</strong><br/>
        						<small>Testing functionality...</small>
        					</a>
        				</li>
        				<li>
        					<a className="alert alert-callout alert-info" href="javascript:void(0);">
        						<img className="pull-right img-circle dropdown-avatar" src="/static/img/avatar3.jpg?1404026799" alt="" />
        						<strong>Alicia Adell</strong><br/>
        						<small>Reviewing last changes...</small>
        					</a>
        				</li>
        				<li className="dropdown-header">Options</li>
        				<li><a href="../../html/pages/login.html">View all messages <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
        				<li><a href="../../html/pages/login.html">Mark as read <span className="pull-right"><i className="fa fa-arrow-right"></i></span></a></li>
        			</ul>
        		</li>
        		<li className="dropdown hidden-xs">
        			<a href="javascript:void(0);" className="btn btn-icon-toggle btn-default" data-toggle="dropdown">
        				<i className="fa fa-area-chart"></i>
        			</a>
        			<ul className="dropdown-menu animation-expand">
        				<li className="dropdown-header">Server load</li>
        				<li className="dropdown-progress">
        					<a href="javascript:void(0);">
        						<div className="dropdown-label">
        							<span className="text-light">Server load <strong>Today</strong></span>
        							<strong className="pull-right">93%</strong>
        						</div>
        						<div className="progress"><div className="progress-bar progress-bar-danger" style={{"width": "93%"}}></div></div>
        					</a>
        				</li>
        				<li className="dropdown-progress">
        					<a href="javascript:void(0);">
        						<div className="dropdown-label">
        							<span className="text-light">Server load <strong>Yesterday</strong></span>
        							<strong className="pull-right">30%</strong>
        						</div>
        						<div className="progress"><div className="progress-bar progress-bar-success" style={{"width": "30%"}}></div></div>
        					</a>
        				</li>
        				<li className="dropdown-progress">
        					<a href="javascript:void(0);">
        						<div className="dropdown-label">
        							<span className="text-light">Server load <strong>Lastweek</strong></span>
        							<strong className="pull-right">74%</strong>
        						</div>
        						<div className="progress"><div className="progress-bar progress-bar-warning" style={{"width": "74%"}}></div></div>
        					</a>
        				</li>
        			</ul>
        		</li>
        	</ul>
        	<ul className="header-nav header-nav-profile">
        		<li className="dropdown">
        			<a href="javascript:void(0);" className="dropdown-toggle ink-reaction" data-toggle="dropdown">
        				<img src="/static/img/avatar1.jpg?1403934956" alt="" />
        				<span className="profile-info">
        					Daniel Johnson
        					<small>Administrator</small>
        				</span>
        			</a>
        			<ul className="dropdown-menu animation-dock">
        				<li className="dropdown-header">Config</li>
        				<li><a href="../../html/pages/profile.html">My profile</a></li>
        				<li><a href="../../html/pages/blog/post.html">My blog <span className="badge style-danger pull-right">16</span></a></li>
        				<li><a href="../../html/pages/calendar.html">My appointments</a></li>
        				<li className="divider"></li>
        				<li><a href="../../html/pages/locked.html"><i className="fa fa-fw fa-lock"></i> Lock</a></li>
        				<li><a href="../../html/pages/login.html"><i className="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
        			</ul>
        		</li>
        	</ul>
        	<ul className="header-nav header-nav-toggle">
        		<li>
        			<a className="btn btn-icon-toggle btn-default" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
        				<i className="fa fa-ellipsis-v"></i>
        			</a>
        		</li>
        	</ul>
      </div>

    )
  }
})
