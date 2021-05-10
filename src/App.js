import { useState } from 'react';
import {Movies} from './constants/movies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import Login from '././pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './pages/home/Home';
import MoviesView from './pages/Movies/components/MoviesView/MoviesView'
import EditMoviePage from './pages/Movies/components/EditMovie/EditMoviePage'
import AddMoviePage from './pages/Movies/components/AddMovie/AddMoviePage';


function App() {



	const [movies,setMovies] = useState(
		localStorage.getItem('movies')
		  ? JSON.parse(localStorage.getItem('movies'))
		  : Movies || []
	  );

	


	
	return (
		<div className="App">
			
			<Switch>
				<PrivateRoute path="/home" exact component={Home} isPrivate />
			<PrivateRoute path="/movies" exact component={MoviesView} isPrivate> 
				<MoviesView  movies={movies} setMovies={setMovies} />
			</PrivateRoute>
          <PrivateRoute  path="/movies/new" exact isPrivate >
            <AddMoviePage movies={movies} setMovies={setMovies} isPrivate />
          </PrivateRoute>
          <PrivateRoute  path="/movies/:movieId" isPrivate >
            <EditMoviePage movies={movies} setMovies={setMovies} isPrivate  />
          </PrivateRoute>
				<PrivateRoute path="/" component={Login}  />
			</Switch>
		</div>
	);
}

export default App;
