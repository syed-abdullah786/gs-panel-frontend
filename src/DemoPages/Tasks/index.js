import React from 'react'
import DataTable from 'react-data-table-component';

function Tasks() {
    
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable:true
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable:true
        },
    ];
const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

  return (
   <>
   <h1>Active</h1>
     <DataTable
            columns={columns}
            data={data}
            fixedHeader
            pagination
        />
   </>
  )
}

export default Tasks