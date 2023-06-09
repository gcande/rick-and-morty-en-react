import React, { useEffect, useState } from "react";
// import { todosLosPersonajes } from '../funciones/funciones';
import { Paginacion } from "./Paginacion";
import { Busqueda } from "./Busqueda";

export const Inicio = () => {
  const urlInicial = "https://rickandmortyapi.com/api/character/";

  const [personajes, setPersonajes] = useState(null);
  const [info, setInfo] = useState({});

  const fetchPersonajes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const nextFuncion = () => {
    fetchPersonajes(info.next);
  };
  const prevFuncion = () => {
    fetchPersonajes(info.prev);
  };

  // Funcion de busqueda
  const [busqueda, setBusqueda] = useState("");
  //captura la entrada del input
  const capturaInput = (event) => {
    setBusqueda(event.target.value);
  };
  //filtramos la busqueda
  const resulBusque = personajes
    ? personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(busqueda.toLowerCase())
      )
    : [];
  //fin busqueda

  useEffect(() => {
    // todosLosPersonajes(setPersonajes)
    fetchPersonajes(urlInicial);
  }, []);

  return (
    <>
      <div className="flex justify-around items-center">
        <h1 className="text-2xl sm:text-3xl font-bold py-2 text-white sombra">
          Rick and Morty Api
        </h1>
        <Busqueda capturaInput={capturaInput} busqueda={busqueda} />
      </div>
      <div className="text-center my-3 mx-3">
        <p>
          Es una pagina web que te ayuda a conocer algunos de los personajes de
          la saga de rick and morty
        </p>
        <p>
          {" "}
          Este proyecto fue realizado en{" "}
          <span className="text-blue-700 font-bold">React</span> y{" "}
          <span className="text-blue-700 font-bold">Tailwindcss</span>
        </p>
      </div>

      <Paginacion prevFuncion={prevFuncion} nextFuncion={nextFuncion} prev={info.prev} next={info.next} />

      <div className="flex flex-row flex-wrap justify-center gap-5 ">
        {personajes != null
          ? resulBusque.map((personaje) => (
              <div
                key={personaje.id}
                className="flex justify-end overflow-hidden relative items-center w-[290px] h-[100px] border shadow-2xl 
                            rounded-lg bg-gray-900 text-white hover:bg-slate-100 hover:text-black"
              >
                <img
                  className="absolute -left-8 shadow-xl w-[130px] rounded-full border-2 border-white"
                  src={personaje.image}
                  alt={personaje.name}
                />

                <div className="flex flex-col items-center gap-1 mr-4 text-center">
                  <p className="text-[15px] font-bold w-40 truncate overflow-hidden">
                    {personaje.id} - {personaje.name}
                  </p>
                  <p className="text-xs w-40 truncate overflow-hidden">
                    Specie: {personaje.species}
                  </p>
                  <p className="text-xs w-40 truncate overflow-hidden">
                    Status: {personaje.status}
                  </p>

                  {/* <a className='border-gray-400 border-2 text-gray-400  hover:bg-gray-400 hover:text-white  font-bold py-[2px] px-3 text-xs rounded-md' href={`/personaje/${personaje.id}`}>Ver</a> */}
                </div>
              </div>
            ))
          : "no hay"}
      </div>
      {/* <Paginacion prevFuncion={prevFuncion} nextFuncion={nextFuncion} /> */}
    </>
  );
};
