import React from 'react';
import './App.css';
import List from './Components/List';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/Components/List' className='nav-link'>
								List
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path='/Components/List'>
						<List />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;