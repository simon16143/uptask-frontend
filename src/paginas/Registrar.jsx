import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})


  const handleSubmit = async (e) =>{
    e.preventDefault()

    //Validar que todos lo campos esten llenos
    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({
        msg:"Todos los campos son obligatorios",
        error:true
    })
    return
  }
    
  //Validar que ambos passwords sean iguales
  if(password !== repetirPassword){
    setAlerta({
      msg:"Las contraseñas no coinciden",
      error:true
    })
    return
  }
 //Validar el tamaño del password  
  if(password.length<6){
    setAlerta({
      msg:"Intenta con una contraseña superior a 6 caracteres",
      error:true
    })
    return
  }
  setAlerta({})
  //Crear al usuario en la API
  try{
    const {data} = await clienteAxios.post('/usuarios',{
      nombre, password, email
    })
    setAlerta({
      msg:data.msg,
      error:false
    })
    setNombre("")
    setEmail("")
    setPassword("")
    setRepetirPassword("")
  }
  
  catch(e){
    setAlerta({
      msg:e.response.data.msg,
      error:true
    })
  }

}

  const {msg} = alerta



  return (
    <>
      <h1 className='text-sky-600 text-6xl font-bold capitalize'>Crea tu cuenta y administra tus 
        <span className='text-slate-700'> proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta}/>}

      {/*Formulario de registro*/}
      <form onSubmit={handleSubmit} className='my-10 bg-white shadow rounded-lg p-5'>
        <div className='my-5 uppercase text-gray-600 font-bold text-xl'>
          <label htmlFor="nombre" className='block uppercase text-gray-600 font-bold text-xl'>Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder='Ingresa tu nombre'
            className='w-full rounded-xl mt-3 p-3 border bg-gray-50'
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
          />
        </div>

        <div className='my-5 uppercase text-gray-600 font-bold text-xl'>
          <label htmlFor="email" className='block'>Email</label>
          <input
            id="email"
            type="email"
            placeholder='Ingresa tu email'
            className='w-full rounded-xl mt-3 p-3 border bg-gray-50'
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>

        <div className='my-5 uppercase text-gray-600 font-bold text-xl'>
          <label htmlFor="password" className='block'>Password</label>
          <input
            id="password"
            type="password"
            placeholder='Ingresa tu password'
            className='w-full rounded-xl mt-3 p-3 border bg-gray-50'
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>

        <div className='my-5 uppercase text-gray-600 font-bold text-xl'>
          <label htmlFor='repetirPassword' className='block'>Repetir Password</label>
          <input
            id="repetirPassword"
            type="password"
            placeholder='Repite tu password'
            className='w-full rounded-xl p-3 border bg-gray-50 '
            value={repetirPassword}
            onChange={e=>setRepetirPassword(e.target.value)}            
          />
        </div>

        <input
          type="submit"
          value="Crear cuenta"
          className='bg-sky-700 text-white w-full py-3 mb-5 uppercase font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>
      <nav className='lg:flex lg:justify-between'>
        <Link
          to="/"
          className='block uppercase text-center my-5 text-sm text-slate-500'
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>

        <Link
          to="/olvide-password"
          className='block uppercase text-center my-5 text-sm text-slate-500'
        >
          ¿Olvidaste tu password?
        </Link>

      </nav>


    </>
  )
}

export default Registrar