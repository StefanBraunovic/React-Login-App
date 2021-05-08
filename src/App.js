import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import Login from '././pages/Login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';

function App() {
	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/home" exact component={Home} isPrivate />
				<PrivateRoute path="/movies" exact component={Movies} isPrivate />
				<PrivateRoute path="/" component={Login} />
			</Switch>
		</div>
	);
}

export default App;
