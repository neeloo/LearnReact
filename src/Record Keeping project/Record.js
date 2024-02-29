import React, { useState } from 'react'
import Header from './Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';



function Record() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const[data,setdata]=useState([]);

    function add(){
        setdata([...data,{ name, email }])
        setname("")
        setemail("")
    }


    return (
        <div className='record'>
            <Header />
            {/* form */}
            <div className="form">
                <Stack direction="row" spacing={2}>
                    <TextField
                        value={name}
                        onChange={(event) => setname(event.target.value)}
                        id="outlined-basic" label="Name" variant="outlined"
                    />
                    <TextField
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                        id="outlined-basic" label="Email" variant="outlined"
                    />
                    <Button onClick={add} 
                    variant="contained" color="error"><AddIcon /> </Button>
                </Stack>
            </div>

            {/* data */}
            <div className="data">

            </div>


        </div>
    )
}

export default Record