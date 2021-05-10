// import React, {useState} from 'react';

import Table from 'react-bootstrap/Table'



const TableComponent = ({header, rows}) => {
     
  
    return <Table striped bordered hover variant="dark">
        <thead>
                <tr>
                    {
                        Array.isArray(header) &&
                            header.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })
                    }
                </tr>
        </thead>
        <tbody>
        { Array.isArray(rows) &&
            rows.map(row => {
                console.log((Object.values(row)));
                return <tr key={row?.id}>
                    {Object.values(row).map((item, index) =>  <td key={index}>{item}</td>)}
                        {/* <td><button onClick={() => handleRemove(row?.id)}>Delete</button></td> */}
                            </tr>
            })
        }
        </tbody>
    </Table>
}

export default TableComponent;