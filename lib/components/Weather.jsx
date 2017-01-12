import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Weather extends Component {
	constructor() {
		super();
	}

	render() {
		const { weather } = this.props
		return(
			<section className="weather">
				<h4 className="individual-mountain-header">Weather Forecast</h4>
				<div className="all-weather-cards">
					{weather.map((item, index) => {
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
		)
	}
}

module.exports = Weather
