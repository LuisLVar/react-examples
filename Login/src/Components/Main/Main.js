import React from 'react'
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Navigation from '../Navigation/Navigation';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

/**
 * Nuestro gran cambio en el software
 * Hacer caso omiso a este pull request, es solo para explicacion de una guia de Fork y Pull Requests
 * que estoy elaborando :P
 */

export const Main = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </>

    )
}