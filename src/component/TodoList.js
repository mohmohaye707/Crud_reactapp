import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({list,removeTodoListProps}) => {
    const renderList =list && list.map((item) => <TodoItem title={item.title} removeTodoItemProps={(e)=>removeTodoListProps(item.id)} key={item.title}/>);

    return (<div>
        {renderList}
       </div>
    );
};

export default TodoList;