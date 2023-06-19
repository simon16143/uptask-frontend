import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Inicia sesión y administra tus
        <span className='text-slate-700'> proyectos</span>
      </h1>
      {/*Formulario de registro*/}
      {/*label del correo*/}  
      <form className='my-10 bg-white shadow rounded-lg p-5'>
        <div className='my-5'>
          <label htmlFor="email" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
          <input
            id="email"
            type="email"
            placeholder='Email de registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />

        </div>
        {/*label del password*/}
        <div className='my-5'>
          <label htmlFor="password" className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
          <input
            id="password"
            type="password"
            placeholder='Ingresa tu password'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />
        </div>
        {/*boton de envio*/}
        <input
          type="submit"
          value="Iniciar Sesión"
          className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>
      <nav className='lg:flex lg:justify-between'>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="registrar"
        >¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="olvide-password"
        >Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  )
}

export default Login