import React, { useEffect, useState } from 'react'
import {Button} from '@mui/material/'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Create(props) {
    const [noteTemp,setNoteTemp] = useState("");
    const [notes,setNote] = useState([]);  
    useEffect(()=>{
       // console.log(noteTemp);
        //console.log(notes);
      //  props.data = 
    },[noteTemp,notes]);

    /*
    useEffect(()=>{
        console.log(notes);
    },[notes])
    */
    const temp = (event)=>{
        //onChange event value will store to noteTemp 
        setNoteTemp(event.target.value);
    }
    const onButtonReflect=()=>{
        //on click of add Button Things will save to notes[]
       // setNotes(notes[...noteTemp])
       setNote((x)=>{
        return[...x,noteTemp]
       })
    }
    
  return (
    <>  
        <div >
        <Stack direction="row" spacing={2} textAlign={"center"} justifyContent={"center"} onChange={temp} sx={{padding:"32px 32px 0 0"}}>
           <TextField id="standard-basic" label="Enter a note" variant="standard" />
           <Button variant="contained" onClick={onButtonReflect}>Add</Button>
         </Stack>
       </div>
  </>
  )
  
}

export default Create