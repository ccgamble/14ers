import React, { Component } from 'react';
import $ from 'jquery';


export default class IndividualMountain extends Component {
	constructor() {
		super();
		this.state = {
			weather: [],
			// directionsInput: '',
			// directionsOutput: ''
		}
	}

	componentDidMount() {
		this.getMountainWeather();
	}






getMountainWeather() {
	const latitude = this.props.selectedData.locationLatitude
	const longitude = this.props.selectedData.locationLongitude

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

	getMountainDirections() {
		const origin = this.props.selectedData.name
		const destination = this.state.directionsInput
		const url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyAWy6SdiM7S0t53eI7ePLZaTTBD5oEvnHI"
		console.log(url)
		$.ajax({
			type:"GET",
			url: 	url,
			async: true,
			dataType: "json",
			success:(result) => {

				this.setState({directionsOutput: result})
				console.log(this.state.directionsOutput)

			},

			error:(errorMessage) => {
				alert("Error");
			}
		});
	}


	handleDirections(directionsInput) {
		this.setState({ directionsInput: directionsInput})
	}










  render(){
		return (
			<div className = "individual-mountain">
				<section className="mountain-info">
					<div className="individual-mountain-snapshot snapshot-container">
					<h3>{this.props.selectedData.name}</h3>
						<p><span className='snapshot-label'>Rank: </span> {this.props.selectedData.elevation}</p>
						<p><span className='snapshot-label'>Elevation: </span>{this.props.selectedData.elevation} feet</p>
						<p><span className='snapshot-label'>Mountain Range: </span>{this.props.selectedData.mountainRange}</p>
						<p><span className='snapshot-label'>Difficulty: </span>{this.props.selectedData.difficulty}</p>
						<p><span className='snapshot-label'>Elevation Gain: </span>{this.props.selectedData.elevationGain} feet</p>
						<p><span className='snapshot-label'>Round Trip Distance: </span>{this.props.selectedData.rtDistance} miles</p>
						<p><span className='snapshot-label'>Round Trip Time: </span>{this.props.selectedData.rtTime} hours</p>
					</div>

					<h4>Routing Information</h4>
					<p>{this.props.selectedData.route}</p>
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
				<section className='directions'>
					<input id = "directions-input"
						placeholder="Starting Point"
						onChange={(e) =>{this.handleDirections(e.target.value)}}
					/>
					<button type="submit" className="direction-submit-btn" onClick={console.log('hello')}>Submit</button>
				</section>
			</div>
		)
	}
}



//
// getMountainData() {
// 	const mountain = this.props.selectedData.name
// 	const url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=" + mountain + "&prop=text%7Cimages%7Cdisplaytitle&section=0"
//
// 	$.getJSON(url , function(json) {
//
// 		$('#wikiInfo').html(json.parse.text['*']);
// 		$("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
// 		$("#wikiInfo").find("a").attr("target", "_blank");
// 	});
// };
