import React, { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './FRMAddSpeler.css';

const FRMAddSpeler = () => {
  const paperStyle={padding: '50px 20px', width:450, margin:"20px auto"}
  const[naam, setNaam]=useState('');
  const[land, setLand]=useState('');
  const[positie, setPositie]=useState('');

  const handleClick=(e)=>{
    e.preventDefault()
    const spelerID = 0;
    const teamID = 0;
    const teamNaam = "string";
    const speler={spelerID, teamID, naam, land, positie, teamNaam}
    console.log(speler)
    fetch('https://localhost:7247/api/Speler',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(speler)
    }).then(()=>{
      console.log("New Speler Added")
    })
  }

  return (
    <container>
      <Paper elevation={3} style={paperStyle}>
      <div className='AddSpeler'>   
        <h1><b> Maak een nieuwe speler</b></h1>
      </div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Naam" variant="standard" name="Naam" fullWidth 
      value={naam}
      onChange={(e)=>setNaam(e.target.value)}
      />
      <TextField id="standard-basic" label="Land" variant="standard" name="Land" fullWidth 
      value={land}
      onChange={(e)=>setLand(e.target.value)}
      />
      <TextField id="standard-basic" label="Positie" variant="standard" name="Positie" fullWidth 
      value={positie}
      onChange={(e)=>setPositie(e.target.value)}
      />
      
    <Button 
      class="AddButton" variant="contained" name="button" onClick={handleClick}>Sla gegevens op
    </Button>
    </Box>
    </Paper>
    </container>
  );
}
export default FRMAddSpeler;