import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ListOrderComponent from '../components/ListOrderComponent';

class OrderListComponent extends Component {
  render() {
    return (
    <div>
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
            <ListOrderComponent />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default OrderListComponent;
