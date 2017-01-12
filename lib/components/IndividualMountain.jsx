import React, { Component } from 'react';
import $ from 'jquery';
import data from '../data.js'
import BasicInfo from './BasicInfo'
import Routes from './Routes'
import Weather from './Weather'
import Directions from './Directions'

export default class IndividualMountain extends Component {
	constructor() {
		super();
		this.state = {
			weather: [],
			destination: '',
			image: [],
			location: {}
		}
	}

	componentWillMount() {
		let location = data.find((item) => {
			return item.name.replace(/[^a-zA-Z]/g, '') === window.location.pathname.replace(/[^a-zA-Z]/g, '')
		})
		this.setState({location: location})
	}

	componentDidMount() {
		this.getMountainWeather();
		this.setLocation();
		this.getMountainImage();
	}

getMountainWeather() {
	const latitude = this.state.location.locationLatitude
	const longitude = this.state.location.locationLongitude

	$.ajax({
		type:"GET",
		url: 	`https://api.wunderground.com/api/d0f02edcc8d2612b/conditions/forecast10day/alerts/hourly10day/q/${latitude},${longitude}.json`,
		async: true,
		dataType: "json",
		success:(result) => {
			this.setState({weather: result.forecast.simpleforecast.forecastday})
		},

		error:(errorMessage) => {
			alert("Error");
		}
	});
}

getMountainImage() {
	const mountainImg = this.state.location.name
	const url = "http://en.wikipedia.org/w/api.php?action=query&titles=" + mountainImg + "&prop=pageimages&format=json&pithumbsize=300"


	$.ajax({
		type:"GET",
		url: 	url,
		async: true,
		dataType: "jsonp",
		success:(result) => {
			if (Object.values(result.query.pages)[0].thumbnail)
			{this.setState({image: Object.values(result.query.pages)[0].thumbnail.source})}
		},

		error:(errorMessage) => {
			alert("Error");
		}
	});
}
	setLocation(){
		this.setState({
			destination: this.state.location.name.split(' ').join('+')
		})
	}

  render(){
		const {image, location, weather} = this.state

		return (
			<div className = "individual-mountain">
				<section className="basic-info">
					<BasicInfo image={image} location={location} setFavorite={()=>this.props.setFavorite(this.state.location)}/>
				</section>
				<Routes location={location} />
				<Weather weather={weather} />
				<Directions location={location} />
			</div>
		)
	}
}
