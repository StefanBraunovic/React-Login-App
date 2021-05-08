import React,{useReducer, useState} from 'react';

import Review from './components/Review'
import Form from './components/Form'
import movies from '../../constants/movies';
import MoviesData from '../../components/contexts/MoviesData'

const changeMovies = ()=>{

}

const Movies = ()=>{
    const [isGridInView, setIsGridInView] = useState(true)
    const [moviesLIst, dispatch] = useReducer(changeMovies,movies)

    
    return <MoviesData.Provider value={{list:moviesLIst}}>
    
    <div>
        <div>
        <button  onClick={()=>setIsGridInView(false)}>Add movie</button>
        </div>

        <div>
            {
                isGridInView
                ?
                <Review/>
                :
                <Form/>
            }
           
          
        </div>
    </div>
    </MoviesData.Provider>
   
 
}

export default Movies