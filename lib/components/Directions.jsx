import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Directions extends Component {
	constructor() {
		super();
	}

	render() {
		let apiCall = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbEa9uWxtIVMbnRqlNFehAuU6E96RNRfk&q=${this.props.location.name.toLowerCase().replace(' ', '+')}`

		return(
			<iframe
				width="600"
				height="450"
				frameBorder="0"
				src={apiCall} >
			</iframe>
		)
	}
}

module.exports = Directions
