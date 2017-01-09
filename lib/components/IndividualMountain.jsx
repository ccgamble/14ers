import React, { Component } from 'react';
import $ from 'jquery';
import data from '../data.js'

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
			this.setState({image: Object.values(result.query.pages)[0].thumbnail.source})
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
		let apiCall = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbEa9uWxtIVMbnRqlNFehAuU6E96RNRfk&q=${this.state.location.name.toLowerCase().replace(' ', '+')}`

		return (
			<div className = "individual-mountain">
				<img src={this.state.image} />
				<section className="mountain-info">
					<div className="individual-mountain-snapshot snapshot-container">
					<h3>{this.state.location.name}</h3>
						<p><span className='snapshot-label'>Rank: </span> {this.state.location.rank}</p>
						<p><span className='snapshot-label'>Elevation: </span>{this.state.location.elevation} feet</p>
						<p><span className='snapshot-label'>Mountain Range: </span>{this.state.location.mountainRange}</p>
						<p><span className='snapshot-label'>Difficulty: </span>{this.state.location.difficulty}</p>
						<p><span className='snapshot-label'>Elevation Gain: </span>{this.state.location.elevationGain} feet</p>
						<p><span className='snapshot-label'>Round Trip Distance: </span>{this.state.location.rtDistance} miles</p>
						<p><span className='snapshot-label'>Round Trip Time: </span>{this.state.location.rtTime} hours</p>
					</div>

					<div className="routes">
						<h4>Route</h4>
						<p>{this.state.location.route}</p>
					</div>
				</section>

				<button>Favorite</button>
				<button>Completed</button>
				<section className="weather">
					<h3>Weather Forecast</h3>
					<div>
						{this.state.weather.map((item, index) => {
							return (
								<div className='day card-container' key={item.date.day}>
									<h4 className='weekday card-main card-main-info' >
										{item.date.weekday}
									</h4>
									<span className='month-name card-main-info'>{item.date.monthname}</span>
									<span className='month-day card-main-info'> {item.date.day}, </span>
									<span className='year card-main-info'>{item.date.year}</span>
									<p className='card-main-info'>{item.conditions}</p>
							<img
								src={item.icon_url}
							/>
								<p className='temp-high card-main-info'>
									High: {item.high.fahrenheit}&deg;
								</p>
								<p className='temp-low card-main-info'>
									Low: {item.low.fahrenheit}&deg;
								</p>
								<p className='wind card-main-info'>
									Wind: {item.avewind.mph}-{item.maxwind.mph}mph {item.maxwind.dir}
								</p>
						</div>
				)
			})}
			</div>
			</section>

			<iframe
			  width="600"
			  height="450"
			  frameBorder="0"
			  src={apiCall} >
			</iframe>
			</div>
		)
	}
}
