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

renderDifficultySymbol(difficulty){
	if (difficulty === 1) {
		return <img className='difficulty-symbol' src = "../../images/64px-Ski_trail_rating_symbol-green_circle.svg.png"/>
	}
	if (difficulty === 2) {
		return <img className='difficulty-symbol' src='../../images/64px-Ski_trail_rating_symbol-blue_square.svg.png'/>
	}
	if (difficulty === 3) {
		return <img className='difficulty-symbol' src='../../images/64px-Ski_trail_rating_symbol-black_diamond.svg.png'/>
	}
	if (difficulty ===4) {
		return <img className='difficulty-symbol' src='../../images/64px-Ski_trail_rating_symbol-double_black_diamond.svg.png'/>
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
					   <span className='mountain-title'>{data.name}</span>
					   <br/>{data.elevation} ft
					 </div>
					 {this.renderDifficultySymbol(data.difficulty)}
				 </li></Link> ) :
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
					<img className="main-image" src="../images/14er-backgroundphoto-edit.png" />
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
