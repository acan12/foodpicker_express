import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ListCustomerComponent from '../components/ListCustomerComponent';
import ListOrderComponent from '../components/ListOrderComponent';
import ListFoodplaceComponent from '../components/ListFoodplaceComponent';

class ListComponent extends Component {
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
      <div className="section-body col-md-1"></div>
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
            <ListOrderComponent />
          </div>
        </div>
      </div>
      <div className="section-body col-md-1"></div>
      <div>
        <div className='section-body col-md-5'>
          <div className='row'>
            <ListFoodplaceComponent />
          </div>
        </div>
      </div>

    </div>
    )
  }
}

export default ListComponent;
