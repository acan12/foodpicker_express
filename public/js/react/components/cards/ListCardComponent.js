import React, { Component } from 'react';
import { ListComponent } from '../../components/ListComponent';

import { json } from '../../helper/json';

export class ListCardComponent extends Component {
  render () {

    const columnName = Object.values(this.props.columnTitle);
    const columnValue = this.props.dataResources.map(item => json.filter(item, Object.keys(this.props.columnTitle)));

    const cardStyle = {
      'margin': '10px',
    };
    const titleStyle = {
      'float': 'right',
      'margin': '0px',
      'color': '#ababab' };

    return (
      <div className="card" style={ cardStyle }>
        <div className="card-body">
          <h3 style={ titleStyle }>{ this.props.title }</h3>
          <ListComponent dataResources={ [ columnName, columnValue ] } />
        </div>
      </div>
    )
  }
}
