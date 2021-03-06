import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// service
import { callApi } from './js/react/services/api';

// components & sub-components -> dumb component
import { MenuLeftComponent } from './js/react/components/menu-left/MenuLeftComponent';
import { ToolbarLeftComponent } from './js/react/components/toolbar/ToolbarLeftComponent';
import { ToolbarRightComponent } from './js/react/components/toolbar/ToolbarRightComponent';

// containers -> smart component
import ListComponent from './js/mobx/containers/ListComponent';
import CustomerListComponent from './js/mobx/containers/CustomerListComponent';
import OrderListComponent from './js/mobx/containers/OrderListComponent';
import FoodplacesListComponent from './js/mobx/containers/FoodplacesListComponent';

// import CustomersContainer from './js/react/containers/CustomersContainer';
// import FoodPlacesContainer from './js/react/containers/FoodPlacesContainer';
// import OrderContainer from './js/react/containers/OrderContainer';

// redux
import { Provider } from 'mobx-react';
import stores from './js/mobx/stores';

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
  <Provider
    customers={ stores.customers }
    orders={ stores.orders }
    foodplaces={ stores.foodplaces } >

    <Router history={hashHistory}>
      <Route path='/' component={ListComponent} />
      <Route path='/customers' component={CustomerListComponent} />
      <Route path='/foodplaces' component={FoodplacesListComponent} />
      <Route path='/orders' component={OrderListComponent} />
      <Route path='/promos' component={ListComponent} />
      <Route path='/histories' component={ListComponent} />
    </Router>
  </Provider>,
  document.getElementById('AppContentTaskList')
)
