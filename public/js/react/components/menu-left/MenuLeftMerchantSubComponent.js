import React, { Component } from 'react';

export const MenuLeftMerchantSubComponent = React.createClass({

  render: () => {
    return (
      <li className="gui-folder">
        <a>
          <div className="gui-icon"><i className="md md-email"></i></div>
          <span className="title">Merchant</span>
        </a>
        <ul>
          <li><a href="/#" ><span className="title">Main</span></a></li>
          <li><a href="/#/customers" ><span className="title">Customers</span></a></li>
          <li><a href="/#/foodplaces" ><span className="title">Food Places</span></a></li>
          <li><a href="/#/orders" ><span className="title">Order</span></a></li>
          <li><a href="/#/promo" ><span className="title">Promos</span></a></li>
        </ul>
      </li>
    )
  }
});
