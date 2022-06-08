import React, { useCallback, useState } from 'react'
import Count from '../Count/Count';
import { Memo } from '../Memo/Memo';
import Todos from '../Todos/Todos';

export const Main = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    console.log('-------------------- Main ----------------------')

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, [count]);

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo " + (t.length + 1)]);
    }, [todos]);
  
    return (
          <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <Count count={count} increment={increment} />
          </>
        // <Memo />
    );
}
