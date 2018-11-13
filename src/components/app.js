import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Hero from '../routes/hero';
import About from '../routes/about';
import Projects from '../routes/projects';
import Reviews from '../routes/reviews';
import Contact from '../routes/contact';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Hero path="/" />
					<About path="/about" />
					<Projects path="/projects" />
					<Reviews path="/reviews" />
					<Contact path="/contact" />

					<Home path="/home/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
