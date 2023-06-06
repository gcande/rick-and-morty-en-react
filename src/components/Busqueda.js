import React from 'react'

export const Busqueda = ({capturaInput, busqueda}) => {
  return (
    <input placeholder='Busqueda' className='w-[130px] h-7 px-3 py-2 border-2 border-slate-400 text-sm sha rounded-xl focus:outline-none focus:border-sky-500' type="text" value={busqueda} onChange={capturaInput} />
  )
}
