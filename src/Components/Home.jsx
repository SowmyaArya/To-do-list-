// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import { Grid2, Paper, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import InsertForm from './InsertForm';
// import List from './List';


// export default function Home() {
//     let initialNotes;
//     if(localStorage.getItem("notes") == null){
//         initialNotes = [];
//     }else{
//         initialNotes = JSON.parse(localStorage.getItem("notes"));
//     }
//     const [notes ,setNotes] = useState(initialNotes);
//     console.log(notes)

//     const deleteNote = (id) =>{
//         const filteredNotes = notes.filter((item) => item.id != id);
//         setNotes(filteredNotes);
//         localStorage.setItem("Notes", JSON.stringify(filteredNotes));

//     }
    
//   return (
//    <>
//   <Paper sx={{p:3,}}>

 
//          <Box
//          sx={{ 
//             height:"100vh",
//             // backgroundColor :'linear-gradient(177deg, blue,blue)',
//             backgroundColor:"skyblue",
//             display:"flex",
//             justifyContent:"center",
//             alignItems:'center',

//           }}>
     

      
//       <Paper sx={{padding:'20px'}}>

     
//       <Grid container spacing={2}>
//         <Grid  xs={8}>
//          <Typography>
//    TO-DO-LIST

//          </Typography>
//         </Grid>
//         <Grid2  xs={8}>
//             {/* <InsertForm />  step 1 */}
//             <InsertForm setNotes={setNotes} notes={notes} />  {/* step 2 s */}
        
//         </Grid2>
//         <Grid2 size={{xs:12}}>
//             <Box sx={{maxHeight:"40vh", overflow:"auto",p:2}}>
//                 {notes?.length>0?(
//                      notes.map((note, index) =>(
//                         <List note={note}
//                         key={index}
//                         deleteNote={deleteNote}/>
//                      ))):(
//                         <Box>
//                             <Typography>
//                                 No item found
//                             </Typography>
//                         </Box>
//                      )}
               
               

//             </Box>
//         </Grid2>
//       </Grid>
      
//       </Paper>
     
   
  

//     </Box>
//     </Paper>
//    </>
//   );
// }


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper, Typography } from '@mui/material';
import InsertForm from './InsertForm';
import List from './List';

export default function Home() {
  let initialNotes;
  if (localStorage.getItem("notes") == null) {
    initialNotes = [];
  } else {
    initialNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [notes, setNotes] = useState(initialNotes);
  console.log(notes);

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((item) => item.id !== id);
    setNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };
  const updateNote = (e,note) =>{
    const noteIndex = notes.findIndex((item) => item.id == note.id);                    //when this is and selected id is equal and node is seleted
    const {done} =note;                                               
    let status;     
    if(done) {
        status = false;
    }else{
        status =true;
    }
    const updatedNoteData = {...note,done:status};
    const finalNotes = [...notes];
    finalNotes.splice(noteIndex, 1,updatedNoteData);
    setNotes(finalNotes);
    localStorage.setItem("notes" , JSON.stringify(finalNotes));
  };

  return (
    <>
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "skyblue",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
          }}
        >
          <Paper sx={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
            <Grid container spacing={2}>
              {/* Title Section */}
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  TO-DO-LIST
                </Typography>
              </Grid>

              {/* Insert Form Section */}
              <Grid item xs={12}>
                <InsertForm setNotes={setNotes} notes={notes} />
              </Grid>

              {/* Notes List Section */}
              <Grid item xs={12}>
                <Box sx={{ maxHeight: "40vh", overflow: "auto", p: 2 }}>
                  {notes?.length > 0 ? (
                    notes.map((note, index) => (
                      <List note={note} key={index} deleteNote={deleteNote} updateNote={updateNote}/>
                    ))
                  ) : (
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography>No item found</Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>
    </>
  );
}
