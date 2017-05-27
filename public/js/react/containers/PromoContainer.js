import React, { Component } from 'react'
import { connect } from 'react-redux';

import { CRUDCardComponent } from '../components/cards/CRUDCardComponent';
import { showLoading, getListAction, addItemAction } from '../actions/PromoAction';

// helper
import { json } from '../helper/json';

class PromoContainer extends Component {
  render() {
    const DEFINE_COLUMN_KEYS = ['id', 'title', 'content']

    const titles = {id: '#', title: 'Title', content: 'Content' }
    const titlesFilter = json.filter(titles, DEFINE_COLUMN_KEYS)
    
    const dataFilter = this.props.promoReducer.data.map(item => json.filter(item, DEFINE_COLUMN_KEYS));

    const dataResources = [
      titlesFilter,
      dataFilter,
    ];

    const title = 'PROMO'
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
    promoReducer: state.promoReducer,
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

export default connect( mapStateToProps, mapDispatchToProps )(PromoContainer);
