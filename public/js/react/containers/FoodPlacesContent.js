import React, { Component } from 'react'
import { connect } from 'react-redux';

import { CardComponent } from '../components/cards/CardComponent';
import { addItemAction } from '../actions/CustomerAction';
//seeds
import { seeds } from '../../../seeds';

class FoodPlacesContent extends Component {
  render() {
    const fields = ['#', 'Name']
    const data = seeds.places;
    // var data = this.props.merchantReducer;
    const dataFields = [ fields, data ]

    const title = 'FOOD PLACES'
    const titleStyle = {'float': 'right', 'margin': '0px', 'color': '#ababab'};

    return (
      <div>
        <div className='section-body col-md-5'>
	        <div className='row'>
						<CardComponent
              title={ title }
              titleStyle={ titleStyle }
              dataFields={ dataFields }
              onHandleClick={ () => this.props.handleClick() }
              onHandleSubmit={ (event) => this.props.handleSubmit(event) }/>
						<em className='text-caption'>Default table</em>
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
    merchantReducer: state.merchantReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      alert('dongo')
      dispatch({
        type: 'FETCH_ALL',
        value: 2,
        topic: 'MyTopic',
        question: 'question now'
      })
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

export default connect( mapStateToProps, mapDispatchToProps )(FoodPlacesContent);
