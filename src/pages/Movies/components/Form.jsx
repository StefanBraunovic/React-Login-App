import { useState,useContext } from "react"
import MoviesData from '../../../components/contexts/MoviesData';

const Form = ()=>{
    const {dispatch} = useContext(MoviesData)
    const[title,setTitle] = useState('');
    const[year,setYear] = useState(2000);

    const onSave = ()=>{
        console.log(title,year);
        dispatch({type:'add', data:{title:title,year:year}})
       
    }

    return <div>
        <input type="text"
         placeholder="Title"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         />
        <input type="number"
         placeholder="Year"
         value={year}
         onChange={(e)=>setYear(e.target.value)}
         />
         <button onClick={()=>onSave()}>Add</button>
    </div>
}


export default Form