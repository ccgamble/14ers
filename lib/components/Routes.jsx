import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Routes extends Component {
	constructor() {
		super();
	}

	render() {
		const { location } = this.props
		return(
			<div className="routes">
				<h4>Route</h4>
				<p>{location.route}</p>
			</div>
		)
	}
}

module.exports = Routes
