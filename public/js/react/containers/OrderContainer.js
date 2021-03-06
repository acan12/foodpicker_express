import React, { Component } from 'react'
import { connect } from 'react-redux';

import { CRUDCardComponent } from '../components/cards/CRUDCardComponent';
import { showLoading, getListAction, addItemAction } from '../actions/OrderAction';

// helper
import { json } from '../helper/json';

class OrderContainer extends Component {
  render() {
    const DEFINE_COLUMN_KEYS = ['id', 'caption', 'transaction', 'customer']

    const titles = {id: '#', caption: 'Caption', transaction: 'Transaction Date', customer: 'Customer' }
    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    const dataFilter = this.props.orderReducer.data.map(item => json.filter(item, DEFINE_COLUMN_KEYS));
    console.log('dataFilter=', this.props.orderReducer.data);
    const dataResources = [
      titlesFilter,
      dataFilter,
    ];

    const title = 'ORDER'
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
    orderReducer: state.orderReducer,
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

export default connect( mapStateToProps, mapDispatchToProps )(OrderContainer);
