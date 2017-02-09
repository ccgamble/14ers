import React, { Component } from 'react';
import { map, filter } from 'lodash';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import IndividualMountain from './IndividualMountain';
import Search from './Search';
import MapView from './MapView'


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

setFavorite(e) {
	console.log('favorite')
}

renderDifficultySymbol(difficulty){
	if (difficulty === 1) {
		return <img className='difficulty-symbol' src = "../public/images/green-mountain.svg"/>
	}
	if (difficulty === 2) {
		return <img className='difficulty-symbol' src='../public/images/yellow-mountain.svg'/>
	}
	if (difficulty === 3) {
		return <img className='difficulty-symbol' src='../public/images/orange-mountain.svg'/>
	}
	if (difficulty ===4) {
		return <img className='difficulty-symbol' src='../public/images/red-mountain.svg'/>
	}
	else {
		return difficulty
	}
}

	render() {
		let mountainList = this.props.data.map((data) => {
			let boundItemClick = this.onItemClick.bind(this, data)
			return data.name.toLowerCase().includes(this.state.searchString.toLowerCase()) ?
			(<Link to={`/${data.name}`}
				 onClick={boundItemClick}
				 key={data.rank}>
				 <li className="mountain-listitem">
					 <div className='li-info'>
					   <p className='mountain-title'>{data.name}</p>
					   <p id="mountain-elevation">{data.elevation} ft</p>
						 <p>{data.mountainRange}</p>
						 <p><img src="../public/images/trending_up.png" /> {data.elevationGain} ft</p>
						 <p>RT Distance: {data.rtDistance} miles</p>
						 <p>RT Time: {data.rtTime} hours</p>
						 <p>Difficulty: {this.renderDifficultySymbol(data.difficulty)}</p>
					 </div>
				 </li></Link> ) :
			null
		})

			let display;
				if (!this.props.user) {
					display =
					<article id="not-signed-in">
						To research future expeditions & mark favorite peaks, please LOG IN.
					</article>
				} else {
					display = mountainList
				}


		return (

				<div>
					<div className="app-description-container">
					{/* <img className="main-image" src="../images/14er-backgroundphoto-edit.png" /> */}
					<MapView />
						<p className="app-description">
							<span className="app-title">PEAKeasy</span>
							<br/>An app for discovering Colorado’s 14ers.
						</p>
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
