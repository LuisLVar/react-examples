import React, { createContext, useEffect, useRef, useState } from 'react'
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Navigation from '../Navigation/Navigation';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { Theme } from '../Theme/Theme';
import { Theme2 } from '../Theme2/Theme2';

export const ThemeContext = createContext();
export const ToggleContext = createContext();

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true)
    const count = useRef(0)
    const [state, setState] = useState(false)

    const [contextValue, setContextValue] = useState(false)

    let initialUsers = JSON.parse(localStorage.getItem('state'));
    if(initialUsers === undefined){
        initialUsers = [];
    }
    const [users, setUsers] = useState(initialUsers);

    // useEffect(() => {
    //     setIsLoading(false)
    //     console.log('se renderiza: ' + count.current, state)
    //     count.current = count.current + 1;
    // }, [state])

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(users))
    }, [users])
    

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        // document.getElementById('input').focus();
    };

    const ejecutar = () => {
        setState(!state)
        focusInput()
    }

    return (
        <>
            {isLoading ? 
              <CircularProgress value={75} sx={{  padding: '8px' }} color="inherit" />       
             :
             <>
             <Navigation />
             <Routes>
                 <Route path="/login" element={<Login users={users} />} />
                 <Route path="/registro" element={<Registro users={users} setUsers={setUsers}/>} />
                 <Route path="/todo" element={<Todos users={users} setUsers={setUsers}/>} />
                 <Route path="/" element={<Navigate to="/login" replace />} />
                 <Route path="*" element={<Navigate to="/login" replace />} />
             </Routes>
             </>
             } 
        </>
        // <ThemeContext.Provider value={contextValue}>
        //     <ToggleContext.Provider value={setContextValue}>
        //         <Theme />
        //         <hr />
        //         <Theme2 />
        //         <hr />
        //         <div>
        //             {count.current}
        //         </div>
        //         <input id='input' type="text" ref={inputElement} />
        //         <button
        //             onClick={() => ejecutar()}
        //             style={{backgroundColor: state ? 'skyblue' : '#ccc'}}
        //         >
        //             Click
        //         </button>
        //     </ToggleContext.Provider>
        // </ThemeContext.Provider>


    )
}