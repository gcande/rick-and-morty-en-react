import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { unicoPersonaje} from '../funciones/funciones';

export const Personaje = () => {
  // usamos el useParams para capturar el id del personaje
  const {id} = useParams()

  const [personaje, setpersonaje] = useState(null)

  useEffect(() => {
    unicoPersonaje(id, setpersonaje)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
    <div className='flex justify-center'>
      {personaje != null ? (
        <div className=' p-7 text-center border shadow-xl my-12'>          
          <h2 className='font-extrabold uppercase'> {personaje.name}</h2>
          <img src={personaje.image} alt={personaje.name} className='w-[200px] rounded-lg'></img>
          <p><strong>Especie:</strong> {personaje.species}</p>
          <p><strong>Genero</strong>: {personaje.gender}</p>
          <p><strong>Hubicación:</strong> {personaje.location.name}</p>
        </div>
      ) : ('no hay personajes')}
    </div>
    </>
  )
}
