import React, { Children, useEffect, useState } from 'react'
import { cambiarColor } from '../../shared/cambiarColor';
import { Cartel } from '../Cartel/Cartel';
import { Contador } from '../Contador/Contador';
import ContadorClase from '../ContadorClase/ContadorClase';
import ContadorFuncion from '../ContadorFuncion/ContadorFuncion';
import { ContadorReducer } from '../ContadorReducer/ContadorReducer';
import { Todos } from '../TodosReducer/Todos';
import './Main.css'
import { usersList } from './usersList';

const Main = ({rojo, azul, children}) => {
    
    const [contador, setContador] = useState(0)
    const [titulo, setTitulo] = useState("Hola Mundo")
    const [color, setColor] = useState('white')

    useEffect(() => {
        // Ejecutar este codigo cuando el estado monitoreado cambie.
        cambiarColor(contador, setColor)
        // Monitorear el contador.
    }, [contador])
    
    return (
        <div className='container'>
            {/* <Cartel titulo={titulo} contador={contador} color={color}/>
            <Contador titulo={titulo} contador={contador} setContador={setContador} color={color} />
            <hr /><hr />
            <ContadorClase />
            <hr /><hr />
            <ContadorFuncion /> */}
            {/* <div>
                Div rojo:
                {rojo}
            </div>
            <div>
                Div azul:
                {azul}
            </div>
            <>
                Children ( Div verde ) :
                {children[0]}
            </> */}

            {/* <ContadorReducer /> */}
            <Todos />
        </div>
    )
}

export default Main;
