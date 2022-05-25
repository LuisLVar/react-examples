import React, { createContext, useEffect, useState } from 'react'
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

/**
 * Nuestro gran cambio en el software
 * Hacer caso omiso a este pull request, es solo para explicacion de una guia de Fork y Pull Requests
 * que estoy elaborando :P
 */

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [contextValue, setContextValue] = useState(false)

    useEffect(() => {
      setIsLoading(false)
    }, [])

    return (
        // <>
        //     {isLoading ? 
        //       <CircularProgress value={75} sx={{  padding: '8px' }} color="inherit" />       
        //      :
        //      <>
        //      <Navigation />
        //      <Routes>
        //          <Route path="/login" element={<Login />} />
        //          <Route path="/registro" element={<Registro />} />
        //          <Route path="/" element={<Navigate to="/login" replace />} />
        //          <Route path="*" element={<Navigate to="/login" replace />} />
        //      </Routes>
        //      </>
        //      } 
        // </>
        <ThemeContext.Provider value={contextValue}>
            <ToggleContext.Provider value={setContextValue}>
                <Theme />
                <hr />
                <Theme2 />
            </ToggleContext.Provider>
        </ThemeContext.Provider>
        

    )
}