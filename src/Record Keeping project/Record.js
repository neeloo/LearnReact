import * as React from 'react'
import Header from './Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Record() {
    return (
        <div className='record'>
            <Header />
            <div className="n">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Add</Button>
            

            </div>
           
        </div>
    )
}

export default Record