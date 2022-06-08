import React, { useState } from 'react'
import { Carros } from '../Carros/Carros'
import './Main.css'
import { carros as listaCarros } from '../../shared/carros'

const Main = () => {

    const [carros, setCarros] = useState(listaCarros)

    return (
        <div className='container'>
            <Carros carros = {carros} setCarros={setCarros}/>
        </div>
    )
}

export default Main;