import React,{useReducer, useState} from 'react';

import Review from './components/Review'
import Form from './components/Form'
import movies from '../../constants/movies';
import MoviesData from '../../components/contexts/MoviesData'

const changeMovies = (state, action) => {
    switch(action.type){
       
        case 'add':
            const newId = movies.length;

            return movies.push({id: newId, title: action.data.title, year: action.data.year})
 
        default:
            return ;
    }
}

const Movies = ()=>{
    const [isGridInView, setIsGridInView] = useState(true)
    const [moviesLIst, dispatch] = useReducer(changeMovies,movies)

    
    return <MoviesData.Provider value={{
        list:moviesLIst,
        dispatch:(e)=>dispatch(e)}}>
    
    <div>
        <div>
        </div>

        <div>
            {
                isGridInView
                ?
                <Review/>
                :
                <Form/>
            }
            <button  onClick={()=>setIsGridInView(false)}>Add movie</button>
           
          
        </div>
    </div>
    </MoviesData.Provider>
   
 
}

export default Movies