import React from 'react';

import Table from 'react-bootstrap/Table'

//header = [ 'title 1', 'title 2', ... ]
// rows = [
//  { value, value2}
// ]

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
                            </tr>
            })
        }
        </tbody>
    </Table>
}

export default TableComponent;