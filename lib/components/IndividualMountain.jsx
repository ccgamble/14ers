import React, { Component } from 'react';


export default class IndividualMountain extends Component {
  render({params}){
		return (
			<div className = "IndividualMountain">
				<h2>Mountain: {params.destination}</h2>
			</div>
		)
	}
}
