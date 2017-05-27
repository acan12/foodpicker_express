import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CRUDCardComponent } from '../components/cards/CRUDCardComponent';
import { showLoading, getListAction, addItemAction } from '../actions/CustomerAction';

// helper
import { json } from '../helper/json';
import { seeds } from '../../../seeds'


class CustomersContainer extends Component {
  render() {

    const DEFINE_COLUMN_KEYS = ['id', 'name', 'phone', 'address'];

    const titles = {id: '#', name: 'Name', phone: 'Phone', address: 'Address' }
    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    const dataFilter = this.props.customerReducer.data.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    const dataResources = [
      titlesFilter,
      dataFilter,
    ]
    const title = 'CUSTOMERS'
    const titleStyle = {
      'float': 'right',
      'margin': '0px',
      'color': '#ababab' };

    return (
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
						<CRUDCardComponent
              isLoading={ this.props.loadingReducer.isLoading }
              title={ title }
              titleStyle={ titleStyle }
              dataResources={ dataResources }
              onHandleClick={ () => this.props.handleClick() }
              onHandleSubmit={ (event) => this.props.handleSubmit(event) } />
					</div>
  			</div>
  		</div>
    )
  }

  propTypes: {
      value:      React.PropTypes.func,
      seats:      React.PropTypes.number,
      settings:   React.PropTypes.object,
      callback:   React.PropTypes.func,
      isClosed:   React.PropTypes.bool,
      any:        React.PropTypes.any,
    }
}


const mapStateToProps = (state) => {
  return {
    loadingReducer: state.loadingReducer,
    customerReducer: state.customerReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(showLoading(true));
      setTimeout(() => {
          dispatch(showLoading(false));
          dispatch(getListAction());
      }, 2000)

    },
    handleSubmit: (event) => {
      alert("call form post")
      var values = Object.assign({},
          {
            'task[topic]': event.target.topic.value,
            'task[question]': event.target.question.value,
            'task[answer]': event.target.question.value
        })

      addItemAction(values, dispatch)

      console.log(values)
      $('#newTaskForm').modal('hide')
      event.preventDefault();
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(CustomersContainer);
