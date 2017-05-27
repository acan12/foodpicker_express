import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// service
import { callApi } from './js/react/services/api';

// components & sub-components
import { MenuLeftComponent } from './js/react/components/menu-left/MenuLeftComponent';
import { ToolbarLeftComponent } from './js/react/components/toolbar/ToolbarLeftComponent';
import { ToolbarRightComponent } from './js/react/components/toolbar/ToolbarRightComponent';

// containers -> group of component
import DashboardContainer from './js/react/containers/DashboardContainer';
import CustomersContainer from './js/react/containers/CustomersContainer';
import FoodPlacesContainer from './js/react/containers/FoodPlacesContainer';
import OrderContainer from './js/react/containers/OrderContainer';
import PromoContainer from './js/react/containers/PromoContainer';

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

// content component rendering
render (
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path='/' component={DashboardContainer} />
      <Route path='customers' component={CustomersContainer} />
      <Route path='foodplaces' component={FoodPlacesContainer} />
      <Route path='orders' component={OrderContainer} />
      <Route path='promo' component={PromoContainer} />
    </Router>
  </Provider>,
  document.getElementById('AppContentTaskList')
)
