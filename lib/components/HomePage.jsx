import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';


class HomePage extends Component {
  constructor() {
    super();

	}

			render() {

				let mountainList = this.props.data.map((d) => {
					return d.name.toLowerCase().includes(this.props.searchString.toLowerCase()) ? (<li key={d.rank}><Link to={`/${d.name}`}>{d.name}</Link>, Elevation: {d.elevation} ft, Difficulty: {d.difficulty}</li>) : null
				})
				return (
					<div>
						{mountainList}
					</div>
				)
			}
		}



export default HomePage;
