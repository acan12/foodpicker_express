import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ListCustomerComponent from '../components/ListCustomerComponent';

class CustomerListComponent extends Component {
  render() {
    return (
    <div>
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
            <ListCustomerComponent />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CustomerListComponent;
