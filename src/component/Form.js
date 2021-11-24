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
      }));
   
   const classes = useStyles();
      
  return ( 

      <div>
         <form className={classes.root} onSubmit={handleFormSubmit}>
            <TextField
               id="outlined-secondary"
               value={inputValue}
               onChange={handleInputChange}
               label="Enter something to do..."
               variant="filled"
               color="primary"
            />
            <div className={classes.root}>
            <Button 
              variant="contained"
              color="blue"
              type= "submit"
              //onClick={handleFormSubmit}
            >
               Add
            </Button>
            </div>
         </form>
        </div>
    )
}

export default Form;