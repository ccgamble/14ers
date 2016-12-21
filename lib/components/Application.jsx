import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Search from './Search'
import IndividualMountain from './IndividualMountain'
import HomePage from './HomePage'
import mountainData from '../data.js'



class Application extends Component {
  constructor() {
    super();
			this.state = {
				data: [],
				searchString: ''
			}
		}


	componentWillMount() {
		this.setState({
			data: mountainData
		})
	}



	updateSearch(searchString) {
		this.setState({searchString: searchString});
	}

	render() {

		return(
			<BrowserRouter>
				<section>
					<Search onSearch={this.updateSearch.bind(this)}/>
					<Match exactly pattern="/" render={ () => (
						<HomePage data={this.state.data} searchString={this.state.searchString} />
					)} />
 					<Match pattern= "/:destination" component={IndividualMountain} />
				</section>
			</BrowserRouter>
		)
	}
}

export default Application;
