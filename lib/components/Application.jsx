import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import data from '../data.js'
import Search from './Search'
import IndividualMountain from './IndividualMountain'


class Application extends Component {
  constructor() {
    super();
			this.state = {
				data: [],
				searchString: ''
			}
		}

	componentDidMount() {
		this.setState({
			data: data
		})
	}

	updateSearch(searchString) {
		this.setState({searchString: searchString});
	}

	render() {

		let mountainList = this.state.data.map((d) => {
			return d.name.toLowerCase().includes(this.state.searchString.toLowerCase()) ? (<li key={d.rank}>{d.name}, Elevation: {d.elevation} ft, Difficulty: {d.difficulty}</li>) : null
		})
		return(
			<BrowserRouter>
				<section>
					<Search onSearch={this.updateSearch.bind(this)}/>
					{mountainList}
					<Match pattern= "/:name" component={IndividualMountain} />
				</section>
			</BrowserRouter>
		)
	}
}

export default Application;
