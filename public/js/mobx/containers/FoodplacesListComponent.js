import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ListFoodplaceComponent from '../components/ListFoodplaceComponent';

class FoodplacesListComponent extends Component {
  render() {
    return (
    <div>
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

export default FoodplacesListComponent;
