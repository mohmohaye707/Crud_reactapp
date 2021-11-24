import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({list,removeTodo}) => {
    const renderList =list && list.map((item) => <TodoItem title={item.title} removeTodo={(e)=>removeTodo(item.id)} key={item.titel}/>);

    return (<div>
        {renderList}
       </div>
    );
};

export default TodoList;