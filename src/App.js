import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Form from './component/Form';
import Section from './component/Section';
import TodoList from './component/TodoList';

const  appTitle= "To-Do-List"

const list = [
   { id:1 ,title: "Test #1"},
   { id:2 ,title: "Test #2"},
   { id:3 ,title: "Test #3"}
];


const App =()=>{
  const [todoList,setToDoList] = useState(list);
  
  const addTodo = (item) =>{
    setToDoList((oldList)=> [...oldList,item]);
  };

  const removeTodo =(id)=>{
    setToDoList((oldList) => oldList.filter((item)=> item.id !== id));
  };

  const useStyles = makeStyles({
      root:{
        flexGrow: 1,
      }
  }
  );

  const classes = useStyles();

  return  <div>
    <Typography color="Blue"  variant="h3">
      <Section>
       <div>
           {appTitle}
       </div>
      </Section>
      </Typography>
      <Grid>
      <Section>
       <div>
         <Form addTodo={addTodo}/>
       </div>
      </Section>
      <Section>
        <TodoList removeTodoListProps ={removeTodo} list={todoList}/>
      </Section>
    </Grid>
  </div>;
}
export default App;
