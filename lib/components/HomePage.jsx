import React, { Component } from 'react';
import { map, filter } from 'lodash';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import IndividualMountain from './IndividualMountain';
import Search from './Search';


class HomePage extends Component {
  constructor() {
    super();
		this.state = {
			selectedData: [],
			searchString: '',
		}
	}

onItemClick(data, e) {
	let individualData = data
	this.setState({
		selectedData: individualData
	})
}

updateSearch(searchString) {
	this.setState({searchString: searchString});
}

	render() {
		let mountainList = this.props.data.map((data) => {
			let boundItemClick = this.onItemClick.bind(this, data)
			return data.name.toLowerCase().includes(this.state.searchString.toLowerCase()) ?
			(<li className="mountain-listitem" key={data.rank}><Link to={`/${data.name}`} onClick={boundItemClick}>{data.name}</Link>, Elevation: {data.elevation} ft, Difficulty: {data.difficulty}</li>) :
			null
		})

			let display;
				if (!this.props.user) {
					display =
					<article id="not-signed-in">
						To research future expeditions, mark favorite peaks, and log climbs you’ve already completed, LOG IN.
					</article>
				} else {
					display = mountainList
				}


		return (

				<div>
					<div className="app-description-container">
					<img className="main-image" src="../images/background-photo.png" />
						<p className="app-description">Reach maximum potential with PEAKeasy, an app for climbing Colorado’s 14ers.</p>
					</div>
					<Search onSearch={this.updateSearch.bind(this)}/>
					<div className="mountain-list">
						{display}
					</div>

				</div>

		)
	}
}



export default HomePage;
