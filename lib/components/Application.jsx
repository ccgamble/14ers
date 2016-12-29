import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import firebase, { signIn, signOut } from '../firebase';
import Search from './Search'
import IndividualMountain from './IndividualMountain'
import HomePage from './HomePage'
import mountainData from '../data.js'
import SignIn from './SignIn'



class Application extends Component {
  constructor() {
    super();
			this.state = {
				data: [],
				searchString: '',
				user: ''
			}
		}


	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => this.setState({ user }));
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
					<SignIn />
					<Search onSearch={this.updateSearch.bind(this)}/>
					<Match exactly pattern="/" render={ () => (
						<HomePage data={this.state.data} searchString={this.state.searchString} />
					)} />

				</section>
			</BrowserRouter>
		)
	}
}

export default Application;
