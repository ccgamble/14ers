import React, { Component } from 'react';
import { map, filter, extend } from 'lodash'
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import firebase, { signIn, signOut, reference, remove } from '../firebase';
import Search from './Search'
import IndividualMountain from './IndividualMountain'
import HomePage from './HomePage'
import mountainData from '../data.js'
import SignIn from './SignIn'
import SignOut from './SignOut'
import Header from './Header'
import DisplayFavorites from './DisplayFavorites'



class Application extends Component {
  constructor() {
    super();
			this.state = {
				data: [],
				user: null,
				mountainDatabase: [],
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


	setFavorite(mountain) {
		let mountainDatabase = this.state.mountainDatabase
		this.checkForDuplicates(mountain)
		if (this.checkForDuplicates(mountain) === 0) {

			mountainDatabase = this.state.mountainDatabase.push({name: mountain.name})
			this.setState({
				mountainDatabase:	mountainDatabase
			})
			this.referenceDatabaseUser(this.state.user);
		}
		else {
			alert("Already Favorited")
		}
}

	checkForDuplicates(mountain) {
		var duplicates = 0
		this.state.favorites.forEach(function(favorite) {
			 if (favorite.name === mountain.name) {duplicates ++}
		});
		return duplicates
	}

	render() {
		const { user, data, searchString, favorites } = this.state

		return(
		<BrowserRouter>
			<section>
				<Header/>
				<SignIn user={user}/>
				<SignOut user={user}/>
				<Match exactly pattern="/" render={ () => (
					<HomePage data={data} searchString={searchString} user={user}/>
				)} />
				<Match pattern="/:name" render={ () => (
					<IndividualMountain setFavorite={(mountain)=>this.setFavorite(mountain)}/>
				)} />
			</section>
		</BrowserRouter>
		)
	}
}

export default Application;
