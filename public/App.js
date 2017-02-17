import React from "react";
import { render } from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// components
import { callApi } from "./js/react/services/api"
import { getListAction } from "./js/react/actions/CustomerAction"
import { MenuLeftComponent } from "./js/react/components/MenuLeft"
import { ToolbarLeftComponent } from "./js/react/components/ToolbarLeft"
import { ToolbarRightComponent } from "./js/react/components/ToolbarRight"
import ContentTaskComponent  from "./js/react/containers/ContentTask"
import { ContentTaskList2Component } from "./js/react/components/ContentTaskList2"

// redux
import { Provider } from "react-redux";
import store from "./js/react/store";

// Menu left panel
render (
    <MenuLeftComponent />,
    document.getElementById("AppMenuLeft")
)

// Toolbar left side
render (
    <ToolbarLeftComponent />,
    document.getElementById("AppToolbarLeft")
)

// Toolbar right side
render (
    <ToolbarRightComponent />,
    document.getElementById("AppToolbarRight")
)




store.dispatch((dispatch) => {
    getListAction(dispatch)
})

// content component rendering
render (
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path="/" component={ContentTaskComponent} />
      <Route path="app" >
        <Route path="about" component={ContentTaskList2Component} />
        <Route path="main" component={ContentTaskComponent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("AppContentTaskList")
)
