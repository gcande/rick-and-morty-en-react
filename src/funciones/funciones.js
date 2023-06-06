import axios from 'axios';

const todosLosPersonajes = async (estado) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    estado(peticion.data.results)
}

const unicoPersonaje = async (id, estado) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    estado(peticion.data)
}


export {
    todosLosPersonajes,
    unicoPersonaje    
}