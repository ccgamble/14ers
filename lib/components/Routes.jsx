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
				<h4 className="individual-mountain-header">Route</h4>
				<p className="route-info">{location.route}</p>
        <p className="route-source">Route information from 
          <a target="_blank" href="http://www.cmc.org/ProductDetail/tabid/237/rvdsfpid/the-colorado-14ers-a-cmc-pack-guide-3rd-edition-9/rvdsfcatid/books-2/Default.aspx"> The Colorado Mountain Club.</a>
        </p>
			</div>
		)
	}
}

module.exports = Routes
