import React, { useReducer } from 'react'
import { initialTodos } from './list';
import { reducer } from './reducer';

export const Todos = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "CHECK", id: todo.id });
    };

    return (
        <>
            {
                todos.map((todo) => 
                    <div key={todo.id}> 
                        <input type='checkbox' 
                            checked={todo.complete}
                            id={todo.id}
                            onChange={() => handleComplete(todo)}
                             />
                            <label htmlFor={todo.id}>
                                {todo.title}
                            </label>
                    </div>)
            }
        </>
    )
}
