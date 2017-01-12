import React, { Component } from 'react';

class DisplayFavorites extends Component {
	render() {

		return (
			<section className="list-of-favorites">
				{this.props.favorites.name}
			</section>
		)
		}
	}

module.exports = DisplayFavorites
