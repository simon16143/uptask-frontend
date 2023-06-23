import React from 'react'

const NuevoPassword = () => {
  return (
    <>
      <h1 className=' text-sky-600 font-black text-6xl capitalize'>Reestablece tu password y no pierdas acceso a tus 
        <span className='text-slate-700'> proyectos</span>
      </h1>
      <form className='bg-white my-10  p-5 shadow rounded-lg'>
       <div className='my-5'>
          <label htmlFor='password' className='block uppercase text-xl font-bold text-gray-600'>Nuevo Password</label>
          <input
            id="password"
            type="password"
            placeholder='Escribe tu Nuevo Password'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />
       </div>
       <input
        type="submit"
        value="Guardar Nuevo Password"
        className='w-full bg-sky-700 text-white uppercase py-3 font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors'
       
       />
      </form>

    </>
  )
}

export default NuevoPassword