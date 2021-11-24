import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Form = ({addTodo}) =>{
  const[inputValue,setInputValue]=useState("");

  const handleInputChange= (e) =>{
      setInputValue(e.target.value);

  };
  
  const handleFormSubmit = (e) =>{
     e.preventDefault();

     if(inputValue === "") return;   //if input nothing
     addTodo({ title:inputValue,completed :false});
  }
  
  const useStyles = makeStyles((theme) => ({
         root: {
         '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
         },
         },
         Button:{
            width:'8ch',
            color:'blue'
         },
      }));

    /*const useStyles = makeStyles({
       form:{
          align:"center"
       },
       TextField:{
         id:"outlined-basic",
         label:"Enter something to do...",
         variant:"outlined",
         color:"primary",
         margin:"10px 10px",
         alignItems:"center"
       }
    }
    );*/
   
   const classes = useStyles();
      
  return ( 

      <div>
         <form className={classes.root} onSubmit={handleFormSubmit}>
            <TextField
               value={inputValue}
               onChange={handleInputChange}
               id="outlined-basic"
               label="Enter something to do..."
               variant="outlined"
               color="primary"
               margin="10px 10px"
               alignItems="center"
            />
            <Button 
              className={classes.Button}
              variant="contained"
              type= "submit"
              onClick={handleFormSubmit}
            >
               Add
            </Button>
            
         </form>
        </div>
    )
}

export default Form;