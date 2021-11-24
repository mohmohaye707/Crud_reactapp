import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoItem =({title},removeTodo) => {
  const [isEditing,setIsEditing] = useState(false);
  const [value,setValue] = useState(title);
  const [tempValue,setTempValue] = useState(title);
  const [completed,setCompleted] = useState(false);

  const handleDoubleClick= ()=>{
      setIsEditing(true);
  };
  
  const handleInputKeyDown =(e)=>{
      const key= e.keyCode;

      if(key===13) {            //for enter key
          setValue(tempValue)
          setIsEditing(false);
      } else  if(key === 27) {   //for escape key
        setTempValue(value)
        setIsEditing(false);
      }
  };

  const handleInputOnChange = (e) =>{
      setTempValue(e.target.value);
  };

  const handleButtonClick =() => {
      setCompleted((oldCompleted) => ! oldCompleted);
  };
  
  const handleFormSubmit = (e) =>{
  e.preventDefault();
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
           <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            {
              isEditing?
                <TextField
                 onChange={handleInputOnChange}
                 onKeyDown={handleInputKeyDown}
                 autoFocus={true}
                 value={tempValue}
                />
                 :
                <>
                  <div className={classes.root} onDoubleClick={handleDoubleClick}>
                    <div>
                        <h2 className={classes.root + (completedState ? "green" : "")}>{value}</h2>
                    </div>
                  </div>
                  <div>
                    <button 
                      varient="contained"
                      onClick={handleButtonClick}
                      width="12ch"
                    >
                       Check
                    </button>
                  </div>
                  <div>
                    <button 
                       varient="contained"
                       onClick={removeTodo}
                       width="12ch"
                    >
                        Remove
                    </button>
                  </div>
                </>
          }
          </form> 
        </div>
    )
};

export default TodoItem;