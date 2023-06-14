import React from "react";
// props
export const Paginacion = ({ prevFuncion, nextFuncion, prev, next }) => {
  const anterior = () => {
    prevFuncion();
  };
  const siguiente = () => {
    nextFuncion();
  };

  return (
    <div className="flex justify-around my-4 gap-3">
      {prev ? (
        <button
          className="border-cyan-400 border-2 text-cyan-400 shadow-md shadow-cyan-500/50 hover:bg-cyan-400 
                            hover:text-white px-4 rounded-md mr-1"
          onClick={anterior}
        >
          {" "}Ant{" "}
        </button>
      ) : null}

      {next ? (
        <button
          className="border-indigo-500 border-2 text-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 
                            hover:text-white  px-4 rounded-md"
          onClick={siguiente}
        >
          {" "}Sgt{" "}
        </button>
      ) : null}
    </div>
  );
};
