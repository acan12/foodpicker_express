import React, { Component } from "react"
import { connect } from "react-redux";

import { ContentTaskFormComponent } from "../components/ContentTaskForm";
import { ContentTaskListComponent } from "../components/ContentTaskList";
import { addItemAction } from "../actions/CustomerAction"

class ContentTaskComponent extends Component {
  render() {
    var data = this.props.merchantReducer
    return (
      <div>
        <div className="section-body col-md-5">
	        <div className="row">
						<div className="card">
							<div className="card-body">
                <ContentTaskFormComponent handleSubmit={ (event) => this.props.handleSubmit(event)}/>
							  <button type="button" className="btn ink-reaction btn-raised btn-primary" onClick={ () => this.props.handleClick() }>COUNT UP</button>
							  &nbsp;

							  <button type="button" href="#newTaskForm" data-toggle="modal" className="btn ink-reaction btn-raised btn-primary">FORM</button>
                <ContentTaskListComponent data={data}/>
							</div>
						</div>
						<em className="text-caption">Default table</em>
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
      alert("dongo")
      dispatch({
        type: "FETCH_ALL",
        value: 2,
        topic: "MyTopic",
        question: "question now"
      })
    },
    handleSubmit: (event) => {
      var values = Object.assign({},
          {
            'task[topic]': event.target.topic.value,
            'task[question]': event.target.question.value,
            'task[answer]': event.target.question.value
        })

      addItemAction(values, dispatch)

      console.log(values)
      $("#newTaskForm").modal("hide")
      event.preventDefault();
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ContentTaskComponent);
