import React, { Component } from 'react';
import data from '../data.js'

class Application extends Component {
  constructor() {
    super();
		this.state = {
			data: ''
		}
		}


	render() {
		// const dataList = data.map(d =>
		// console.log(d.name) )

		return(
			<div>
				<ul>{data.map(d=>
					<li key={d.rank}>{d.name}, Elevation: {d.elevation} feet, Difficulty: {d.difficulty}</li>
				)}</ul>
			</div>
		)
	}
}




export default Application;
