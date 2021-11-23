import React, { useState } from 'react';
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
    setToDoList((oldList) => oldList.filter((item)=> item.id !== id))
  };

  return  <div>
      <Section>
       <div>
         <h1>{appTitle}</h1>
       </div>
      </Section>
      <Section>
       <div>
         <Form addTodo={addTodo}/>
       </div>
      </Section>
      <Section>
        <TodoList removeTodo ={removeTodo} list={todoList}/>
      </Section>
  </div>;
}
export default App;
