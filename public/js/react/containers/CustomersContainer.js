import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CRUDCardComponent } from '../components/cards/CRUDCardComponent';
import { getListAction, addItemAction } from '../actions/CustomerAction';
//seeds
import { seeds } from '../../../seeds';
// helper
import { json } from '../helper/json';

class CustomersContainer extends Component {
  render() {

    const defineKeys = ['id','phone'];

    const titles = {id: '#', name: 'Name', phone: 'Phone' }
    const titlesFilter = json.filter(titles, defineKeys)
    // const dataFilter = seeds.customers.map(item => json.filter(item, defineKeys));
    const dataFilter = this.props.customerReducer.map(item => json.filter(item, defineKeys));;
    console.log('data===', dataFilter)
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
    customerReducer: state.customerReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {

      setTimeout(() => {
          dispatch(getListAction());
      }, 1000)

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
