import React, { Component } from 'react';


export default class IndividualMountain extends Component {
  render(){
		return (
			<div className = "IndividualMountain">
				{/* <h2>Mountain:{this.props.data.name}</h2> */}
				{console.log(this.props.data)}
			</div>
		)
	}
}
