import React from 'react'
import Stack from '@mui/material/Stack';
import { Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Create from './Create'
function Render(props) {
    
    console.log("DATA IN RENDER"+props.data);
   //if(props.data.length>0)
  return (
    <>
    <Stack 
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        textAlign={"center"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        >
    <Checkbox></Checkbox>
    <Typography variant="h1" gutterBottom>
       {props.data}
      </Typography>
    <DeleteIcon></DeleteIcon>
    </Stack>
    </>
  )
}

export default Render