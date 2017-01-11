import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Directions extends Component {
	constructor() {
		super();
	}

	render() {
		let apiCall = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbEa9uWxtIVMbnRqlNFehAuU6E96RNRfk&q=${this.props.location.name.toLowerCase().replace(' ', '+')}`

		return(
			<div className="googleMap-container">
				<h4 className="individual-mountain-header">Directions</h4>
				<iframe
					className="googleMap"
					width="600"
					height="450"
					frameBorder="0"
					src={apiCall} >
				</iframe>
			</div>
		)
	}
}

module.exports = Directions
