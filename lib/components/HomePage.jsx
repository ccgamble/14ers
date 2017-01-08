import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import IndividualMountain from './IndividualMountain'


class HomePage extends Component {
  constructor() {
    super();
		this.state = {
			selectedData: []
		}
	}

onItemClick(data, e) {

	let individualData = data
	this.setState({
		selectedData: individualData
	})
}

	render() {

		let mountainList = this.props.data.map((data) => {
			let boundItemClick = this.onItemClick.bind(this, data)
			return data.name.toLowerCase().includes(this.props.searchString.toLowerCase()) ?
			(<li key={data.rank}><Link to={`/${data.name}`} onClick={boundItemClick}>{data.name}</Link>, Elevation: {data.elevation} ft, Difficulty: {data.difficulty}</li>) :
			null
		})

		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/:name" render={ () => (
						<IndividualMountain data={this.props.data} selectedData={this.state.selectedData} />
					)} />
					{mountainList}
			</div>
		</BrowserRouter>
		)
	}
}



export default HomePage;
