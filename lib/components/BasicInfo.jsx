import React, { Component } from 'react';
import { Link } from 'react-router';


export default class BasicInfo extends Component {
	constructor() {
		super();
	}

	render() {
		const {image, location } = this.props
    if (location) 
    {
		return(
			<div className="individual-mountain-snapshot snapshot-container">
			 <img className="mountain-image" src={image} />
			 <h3 className="individual-mountain-header">{location.name}</h3>
			 	<p><span className='snapshot-label'>Rank: </span> {location.rank}</p>
			 	<p><span className='snapshot-label'>Elevation: </span>{location.elevation} feet</p>
			 	<p><span className='snapshot-label'>Mountain Range: </span>{location.mountainRange}</p>
			 	<p><span className='snapshot-label'>Difficulty: </span>{location.difficulty}</p>
			 	<p><span className='snapshot-label'>Elevation Gain: </span>{location.elevationGain} feet</p>
			 	<p><span className='snapshot-label'>Round Trip Distance: </span>{location.rtDistance} miles</p>
			 	<p><span className='snapshot-label'>Round Trip Time: </span>{location.rtTime} hours</p>
			</div>
		)
  }
	}
}

module.exports = BasicInfo
