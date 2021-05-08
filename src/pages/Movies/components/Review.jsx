import React from 'react';
import { useContext } from 'react';

import MoviesData from '../../../components/contexts/MoviesData';
import TableComponent from '../../../components/table/Table';


const Review = ()=>{
    const {list} =useContext(MoviesData)

    const header = ['id', 'Naslov', 'Godina'];

    return <div>
       <TableComponent header={header} rows={list}/>
    </div>
}

export default Review