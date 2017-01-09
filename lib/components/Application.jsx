import React, { Component } from 'react';
import { map, filter } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import firebase, { signIn, signOut, reference, remove } from '../firebase';
import Search from './Search'
import IndividualMountain from './IndividualMountain'
import HomePage from './HomePage'
import mountainData from '../data.js'
import SignIn from './SignIn'
import SignOut from './SignOut'



class Application extends Component {
  constructor() {
    super();
			this.state = {
				data: [],
				searchString: '',
				user: null,
				mountainDatabase: null,
				favorites: []
			}
		}


	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => this.referenceDatabaseUser(user));
		this.setState({
			data: mountainData
		})
	}


	referenceDatabaseUser(user){
		this.setState({
			user,
			mountainDatabase: user ? firebase.database().ref(user.uid) : null
		},
			() => {
				this.createDatabaseEventListener(user);
			}
		);
	}


  createDatabaseEventListener(user){
    if (user) {
      firebase.database().ref(user.uid).on('value', (snapshot) => {
        const favorites = snapshot.val() || {};
        this.setState({
          favorites: map(favorites, (val, key) => extend(val, { key })),
        });
      });
    } else {
      this.setState({
        favorites: [],
      });
    }
  }

	updateSearch(searchString) {
		this.setState({searchString: searchString});
	}



	render() {

		return(
			<BrowserRouter>
				<section>
					<SignIn user={this.state.user}/>
					<SignOut user={this.state.user}/>
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
