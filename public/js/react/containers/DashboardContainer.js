import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListComponent } from '../components/ListComponent';
import { ListCardComponent } from '../components/cards/ListCardComponent';

// helper
import { seeds } from '../../../seeds';

class DashboardContainer extends Component {
  render() {

    // const titles = {id: '#', name: 'Name', phone: 'Phone', address: 'Address' }
    // const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    // const dataFilter = seeds.customers.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    // const dataResources = [
    //   titlesFilter,
    //   dataFilter,
    // ]

    return (
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
            <ListCardComponent
              title={'Customer'}
              columnTitle={{id: '#', phone: 'Phone', address: 'Address' }}
              dataResources={seeds.customers} />
          </div>
        </div>

        <div>
          <div className='section-body col-md-6'>
  	        <div className='row'>
              <ListCardComponent
                title={'Food Place'}
                columnTitle={{id: '#', name: 'Name' }}
                dataResources={seeds.foodplaces} />
            </div>
          </div>
        </div>

        <div>
          <div className='section-body col-md-4'>
  	        <div className='row'>
              <ListCardComponent
                title={'Orders'}
                columnTitle={{id: '#', caption: 'Caption' }}
                dataResources={seeds.orders} />
            </div>
          </div>
        </div>
        <div className="section-body col-md-1"></div>
        <div>
          <div className='section-body col-md-6'>
  	        <div className='row'>
              <ListCardComponent
                title={'Promo'}
                columnTitle={{id: '#', title: 'Title', content: 'Content' }}
                dataResources={seeds.promos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default DashboardContainer;
