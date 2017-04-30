import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// service
import { callApi } from './js/react/services/api';

// action
import { getListAction } from './js/react/actions/CustomerAction';

// components & sub-components
import { MenuLeftComponent } from './js/react/components/menu-left/MenuLeftComponent';
import { ToolbarLeftComponent } from './js/react/components/toolbar/ToolbarLeftComponent';
import { ToolbarRightComponent } from './js/react/components/toolbar/ToolbarRightComponent';

// containers -> group of component
import CustomersContainer from './js/react/containers/CustomersContainer';
import FoodPlacesContainer from './js/react/containers/FoodPlacesContainer';
import OrderContainer from './js/react/containers/OrderContainer';

// redux
import { Provider } from 'react-redux';
import store from './js/react/store';

// Menu left panel
render (
    <MenuLeftComponent />,
    document.getElementById('AppMenuLeft')
)

// Toolbar left side
render (
    <ToolbarLeftComponent />,
    document.getElementById('AppToolbarLeft')
)

// Toolbar right side
render (
    <ToolbarRightComponent />,
    document.getElementById('AppToolbarRight')
)




store.dispatch((dispatch) => {
    getListAction(dispatch)
})

// content component rendering
render (
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path='/' component={CustomersContainer} />
      <Route path='app' >
        <Route path='places' component={FoodPlacesContainer} />
        <Route path='main' component={CustomersContainer} />
        <Route path='order' component={OrderContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('AppContentTaskList')
)
