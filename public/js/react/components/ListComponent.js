import React, { Component } from "react"
import { connect } from "react-redux";

export const ListComponent = (props) => {
  var fields = props.dataFields[0];
  var items = props.dataFields[1];
  
  return (
      <div>
      <table className="table no-margin">
      	<thead>
      		<tr style={{"fontWeight": "bold", "color": "#ababab"}}>
            {/* Global Component of tables fields */}
            { fields.map( (field, index) => {
              return (<th key={ index }>{ field }</th>)
            })}

      		</tr>
      	</thead>
      	<tbody>
          {/* Global Component of tables content values */}
          { items.map((item, index) => {
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
    )
}
