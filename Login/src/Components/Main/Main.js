import React from 'react'
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Navigation from '../Navigation/Navigation';
import {
    BrowserRouter as Router,
    Routes, /* ya no es switch */
    Route
} from "react-router-dom";

export const Main = () => {
  return (
      <>
      <Router>
        <Navigation />
        <Routes>
        <Route path="/registro"
                element={<Registro />}
            />
            <Route path="/login"
               element={ <Login />}
            />
            <Route path="/"
               element={ <Login />}
            />
        </Routes>  
      </Router>
      </>

  )
}