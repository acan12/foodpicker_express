import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('customers')
@observer
class ListComponent extends Component {
  render() {
    const data = this.props.customers.all();
    const columns = data[0];
    const items = data[1];

    return (
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
          <div className="card">
            <div className="card-body">
              <table className="table no-margin">
                <thead>
                  <tr style={{"fontWeight": "bold", "color": "#ababab"}}>
                    {/* Global Component of tables fields */}
                    { Object.keys(columns).map((k, index) => {
                      return (
                        <td key={ index }>{ columns[k] }</td>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* Global Component of tables content values */}
                  { items.reverse().map((item, index) => {
                    return (
                      <tr key={ index }>
                        { Object.keys(item).map((k, index) => {
                          return (
                            <td key={ index }>{ item[k] }</td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListComponent;
