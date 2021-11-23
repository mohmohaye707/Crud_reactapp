import React, { useState } from 'react';
import ReactDom from 'react-dom';
import {Button} from "@material-ui/core/Button";
import {TextField}  from '@material-ui/core/TextField';

/*const Form = () =>{
    return (
       <form >
          <div className="">
            <input type="text"/>
          </div>
    
         <div className="column">
            <button type="submit" className="fa-plus-circle" color="primary" ></button>
         </div>
       </form>
    )
}*/
const Form = (addTodo) =>{
  const[inputValue,setInputValue]=useState("");

  const handleInputChange= (e) =>{
      setInputValue(e.target.value);

  };
  
  const handleFormSubmit = (e) =>{
     e.preventDefault();
     if(inputValue === "") return ;   //if input nothing
     addTodo({title:inputValue,completed :false});
  }

  return ( <div onSubmit={handleFormSubmit}>
      <TextField 
         id="filled-basic"
         value={InputValue}
         onChane={handleInputChange}
         label="Enter something to do..." 
         variant="filled" /> 
      <Button
         variant="contained"
      >
         Click me
      </Button>
        </div>
    )
}

export default Form;