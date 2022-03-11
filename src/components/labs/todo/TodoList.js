import TodoItem from "./TodoItem.js";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
    return(
        <ul>
             {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }

        </ul>
    );
}
export default TodoList;
