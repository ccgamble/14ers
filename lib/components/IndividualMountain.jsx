import React, { Component } from 'react';
import $ from 'jquery';


export default class IndividualMountain extends Component {
	constructor() {
		super();
		this.state = {
			mountainData: [],
			mountainDataImg: [],
			weather: []
		}
	}

	componentDidMount() {
		this.getMountainData();
		this.getMountainWeather();
		// this.getMountainDataImage();
	}



//
// 	getMountainData() {
// 		const mountain = this.props.selectedData.name
// 		const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + mountain + "&format=json&callback=?"
//
// 		$.ajax({
// 			type:"GET",
// 			url:url,
// 			async:false,
// 			dataType: "json",
// 			success:(result) => {
// 				this.setState({
// 					mountainData: result
// 				})
// 				console.log(this.state.mountainData)
// 			},
// 			error:(errorMessage) => {
// 				alert("Error");
// 			}
// 		});
// }

getMountainData() {
	const mountain = this.props.selectedData.name
	const url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=" + mountain + "&prop=text%7Cimages%7Cdisplaytitle&section=0"

	$.getJSON(url , function(json) {

		$('#wikiInfo').html(json.parse.text['*']);
		$("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
		$("#wikiInfo").find("a").attr("target", "_blank");
	});
};

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
					console.log(this.state.weather)

				},

				error:(errorMessage) => {
					alert("Error");
				}
			});
	}





// getMountainDataImage() {
//
// 		const mountainImg = this.props.selectedData.name
//     $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=" + mountainImg + "&gpslimit=20",
//       method: "GET",
//       dataType: "jsonp",
//       success:(result) => {
// 				debugger
// 				for (var i = 0; i < 20; i++) {
// 					if (result.query.pages[i].hasOwnProperty("thumbnail") === true)
// 					{
// 						this.setState({
// 							mountainDataImg: (result.query.pages[i].index - 1).html("<img src=' " + result.query.pages[i].thumbnail.source + "' class='responsive-img valign'>")
// 						})
// 					} else {
// 							this.setState({
// 								mountainDataImg : (result.query.pages[i].index - 1).html("<img src='https://upload.wikimedia.org/wikipedia/commons/2/21/Article_icon.svg' class='responsive-img valign articleIcon'>")
// 							})
// 						}
// 					}
// 					error:() => {
// 						console.log("second call unsuccessful");
// 					}
// 				}
// 			})
// 			error:() => {
// 				alert("Error, please try again");
// 			}
// 		};

// getMountainDataImage() {
//
// 	const mountainImg = this.props.selectedData.name
// 	const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=" + mountainImg
//
//     $.ajax({
//
//       url: url,
//       method: "GET",
//       dataType: "jsonp",
//       success:(result) => {
// 				let obj = result.query.pages
// 				let imageArray = Object.values(obj)[0].images
// 				console.log(imageArray)
// 				this.setState({
// 					mountainDataImg: imageArray[0].title
// 				})
// 			},
//
// 			error:() => {
// 				alert("Error, please try again");
// 			}
// 		});
// 	}
//







  render(){



		return (
			<div className = "individual-mountain">
				<section className="mountain-info">
					<h3>{this.state.mountainData[0]}</h3>
					<p>{this.state.mountainData[2]}</p>
					{/* <section id="output">{this.state.mountainDataImg}</section>
					<img src= /> */}

				</section>
				<div id="wikiInfo">&nbsp;</div>
				<button>Favorite</button>
				<button>Completed</button>
				<section className="weather">
					<h3>Weather Forecast</h3>
					<div>
						{this.state.weather.map((item, index) => {
							return (
								<div className='day' key={item.date.day}>
									<h4 className='weekday'>
										{item.date.weekday}
									</h4>
									<span className='month-name'>{item.date.monthname}</span>
									<span className='month-day'> {item.date.day}, </span>
									<span className='year'>{item.date.year}</span>
								{item.conditions}
							<img
								src={item.icon_url}
							/>
								<span className='temp-high'>
									High: {item.high.fahrenheit}&deg;
								</span>
								<span className='temp-low'>
									Low: {item.low.fahrenheit}&deg;
								</span>
								<span className='wind'>
									Wind: {item.avewind.mph}-{item.maxwind.mph}mph {item.maxwind.dir}
								</span>
						</div>
				)
			})}

					</div>
				</section>
			</div>
		)
	}
}
