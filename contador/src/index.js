import React from 'react';
import ReactDOM from 'react-dom/client';
import BotonAzul from './Components/BotonAzul/BotonAzul';
import { BotonRojo } from './Components/BotonRojo/BotonRojo';
import { BotonVerde } from './Components/BotonVerde/BotonVerde';
import Main from './Components/Main/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main rojo={<BotonRojo />} azul={<BotonAzul />} >
      <BotonVerde />
      <BotonRojo />
    </Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
