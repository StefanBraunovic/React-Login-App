import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import Login from '././pages/Login/Login';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Home from './pages/home/Home';

function App() {
	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/home" exact component={Home} isPrivate />
				<PrivateRoute path="/" component={Login} />
			</Switch>
		</div>
	);
}

export default App;
