import React, { Component } from "react"
import { connect } from "react-redux";

export const ContentTaskListComponent = (props) => {
  var items = props.data.items;
console.log("items:")
  console.log(items)
  return (
      <div>
      <h3>Tasks</h3>
      <table className="table no-margin">
      	<thead>
      		<tr style={{"fontWeight": "bold", "color": "#ababab"}}>
      			<th>#</th>
      			<th>Topic </th>
      		</tr>
      	</thead>
      	<tbody>
          {items.map(function(item){
            return (
              <tr key={item.id}>
          			<td>{item.id}</td>
          			<td>{item.topic}</td>
          		</tr>
            )
          })}

      	</tbody>
      </table>
      </div>
    )
}
