import React, { Component } from 'react';

export const MenuLeftMerchantComponent = React.createClass({

  render: () => {
    return (
      <li className="gui-folder">
        <a>
          <div className="gui-icon"><i className="md md-email"></i></div>
          <span className="title">Merchant</span>
        </a>
        <ul>
          <li><a href="/#/app/main" ><span className="title">Customers</span></a></li>
          <li><a href="/#/app/places" ><span className="title">Food Places</span></a></li>
          <li><a href="/#/app/order" ><span className="title">Order</span></a></li>
          <li><a href="../../html/mail/reply.html" ><span className="title">Promos</span></a></li>
          <li><a href="../../html/mail/message.html" ><span className="title">History</span></a></li>
        </ul>
      </li>
    )
  }
});
