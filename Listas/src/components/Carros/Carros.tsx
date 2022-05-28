import react, {Dispatch, SetStateAction} from 'react'
import './Carros.css'
import { Carro } from '../interfaces/Carro';

interface Props {
  carros : Carro[],
  setCarros: Dispatch<SetStateAction<any>>
}

export const Carros = (props : Props) => {

  const handleSubmit = (event : any) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let carro = {
      marca: data.get('marca'),
      modelo: data.get('modelo'),
      color: data.get('color'),
      imagen: data.get('imagen'),
    }

    props.setCarros([...props.carros, carro]);
  }

  return (
    <div className='container-carros'>
      {
        props.carros.map( ( carro, index ) => {
          return (
                          ( index % 2 === 0 ) ?
                <div className='carro par' key={index}> 
                  <div>
                    {carro.marca}
                  </div>
                  <div>
                    {carro.modelo} 
                  </div>
                  <div>
                    {carro.color}
                  </div>
                  <img src={carro.imagen} />
                </div>
              :
              <div className='carro impar' key={index}> 
                <div>
                  {carro.marca}
                </div>
                <div>
                  {carro.modelo} 
                </div>
                <div>
                  {carro.color}
                </div>
                <img src={carro.imagen} /> 
              </div>
          )
        } )
      }
      <form className='form-container' onSubmit={handleSubmit}>
        <input type='text' name="marca" placeholder='marca' />
        <input type='text' name="modelo" placeholder='modelo' />
        <input type='text' name="color" placeholder='color' />
        <input type='text' name="imagen" placeholder='imagen' />
        <hr></hr>
        <button type='submit'>Ingresar</button>
      </form>
    </div>
    
  )
}



