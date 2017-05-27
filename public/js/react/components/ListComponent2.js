import React, { Component } from "react"
import { connect } from "react-redux";

export const ListComponent = (props) => {
  var columns = props.dataResources[0];
  var items = props.dataResources[1];

  return (
      <div>
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
    )
}
