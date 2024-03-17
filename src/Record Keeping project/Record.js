import React, { useState } from 'react'
import Header from './Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



function Record() {

    const [form, setform] = useState({});
    const [data, setdata] = useState([]);

    function add() {
        setdata([...data, form])
        setform(form);

    }

    // const handlepress=(e)=>{
    //     if(e.key == 'Enter'){
    //         add();
    //     }
    //}

    function remove(index) {
        let arr = data;
        arr.splice(index, 1);
        setdata([...arr]);     //spread oprater
    }


    return (
        <div className='record'>
            <Header />
            {/* form */}
            <div className="form">
                <Stack direction="row" spacing={2}>
                    <TextField
                        // onKeyPress={(e) => (handlepress)}
                        value={form.name}
                        onChange={(event) => setform({ ...form, name: event.target.value })}
                        id="outlined-basic" label="Name" variant="outlined"
                    />
                    <TextField
                        // onkeyPress={(e) => (handlepress)}
                        value={form.email}
                        onChange={(event) => setform({ ...form, email: event.target.value })}
                        id="outlined-basic" label="Email" variant="outlined"
                    />
                    <Button onClick={add} variant="contained" color="success"><AddIcon /> </Button>
                </Stack>
            </div>

            {/* data */}
            <div className="data">
                <div className='val'>
                    <h4>Name</h4>
                    <h4>Email</h4>
                    <h4>Remove</h4>
                </div>
                {
                    data.map((e, index) => {
                        return (
                            <div key={index} className='val'>
                                <h4>{e.name}</h4>
                                <h4>{e.email}</h4>
                                <Stack>
                                    <Button onClick={() => remove(index)} variant="contained" color="error"><DeleteIcon /> </Button>
                                </Stack>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default Record