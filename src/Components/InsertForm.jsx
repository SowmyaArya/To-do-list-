import { Box, Button, Grid, Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function InsertForm( {setNotes ,notes}) {
    const[noteTitle, setNoteTitle] = useState ("");       
    const handlechange = (e) =>{
        setNoteTitle(e.target.value);
    }

    const handleSubmit=() =>{
        let noteId = notes?.length ==0 ? 1 :notes[notes.length - 1].id +1;
        const noteInfo = {id:noteId, title:noteTitle, done:false};
        const updatedNotes = [...notes, noteInfo];
        localStorage.setItem("notes" ,JSON.stringify(updatedNotes));
        setNoteTitle("")
        setNotes(updatedNotes);
    }
  return (
    <div>
        <Box sx={{ flexGrow:0, px:2 }}>
   <Grid2 container spacing={2}>
    <Grid2 size={{xs:10}}>
    <TextField label="Enter title here" onChange={handlechange} fullWidth id="outlined-basic"  variant="outlined" />

    </Grid2>
    <Grid2 size={{xs:10}}>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Grid2>

   </Grid2>

    </Box>
    </div>
  )
}
