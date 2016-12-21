import React, { Component } from 'react';
import { map, filter } from 'lodash'


export default class HomePage extends Component {
  constructor() {
    super();

	}

	goToDestination() {

		const destination = this.props.data.name
		console.log("stored input value: " + destination)
		this.context.router.transitionTo(`/${destination}`)
}

			render() {

				let mountainList = this.props.data.map((d) => {
					return d.name.toLowerCase().includes(this.props.searchString.toLowerCase()) ? (<li key={d.rank}>{d.name}, Elevation: {d.elevation} ft, Difficulty: {d.difficulty}
							<button onClick={()=>this.goToDestination()}>More</button>
						</li>) : null
				})
				return (
					<div>
					{mountainList}

					</div>
				)
			}
		}

		HomePage.contextTypes = {
		  router: React.PropTypes.object
		}
