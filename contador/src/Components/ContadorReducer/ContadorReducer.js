import react , { useReducer } from 'react'
import reducer from './reducer';


export const ContadorReducer = () => {

    const initialState = {count: 10};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}
