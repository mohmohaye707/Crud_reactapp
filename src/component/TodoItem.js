import React, { useState } from "react";

const TodoItem =({title},removeTodo) => {
  const [isEditing,setIsEditing] = useState(false);
  const [value,setValue] = useState(title);
  const [tempValue,setTempValue] = useState(title);
  const [completed,setCompleted] = useState(false);

  const handleDoubleClick= ()=>{
      setIsEditing(true);
  };
  
  const handleInputKeyDown =()=>{
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
  

    return (
        <div className='row'>
         {  
            isEditing?
                <input 
                 onKeyDown={handleInputKeyDown}
                 autoFocus={true}
                 value={tempValue}
                />
                 :
                <>
                  <div className="column" onDoubleClick={handleDoubleClick}>
                    <div>
                        <h2>{value}</h2>
                    </div>
                  </div>
                  <div>
                    <button 
                      varient="contained"
                      onClick={handleButtonClick}
                    >
                       Check
                    </button>
                  </div>
                  <div>
                    <button 
                       varient="contained"
                       onClick={removeTodo}
                    >
                        Remove
                    </button>
                  </div>
                </>
          }
        </div>
    )
};

export default TodoItem;