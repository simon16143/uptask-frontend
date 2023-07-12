import React from 'react'
import {Link, useParams} from "react-router-dom"
import { useEffect,useState } from 'react'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const NuevoPassword = () => {
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)


  const params = useParams()
  const {token} = params
  useEffect(()=>{
    const comprobarToken = async()=>{
      try{
         await clienteAxios.get(`/usuarios/olvide-password/${token}`)
         setTokenValido(true) 
        }
      catch(e){
        setAlerta({
          msg:e.response.data.msg,
          error:true

        })
  
      }
    }
    comprobarToken()
  },[])

  const handleSubmit = async e =>{
    e.preventDefault()
    if(password.length < 6){
      setAlerta({
        msg:"El password es de mínimo 6 caracteres",
        error:true
      })
      return
    }
    try{
      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url,{password})
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
      setPassword('')
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
      <h1 className=' text-sky-600 font-black text-6xl capitalize'>Reestablece tu password y no pierdas acceso a tus 
        <span className='text-slate-700'> proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      {tokenValido && (
        <form onSubmit={handleSubmit} className='bg-white my-10  p-5 shadow rounded-lg'>
        <div className='my-5'>
           <label htmlFor='password' className='block uppercase text-xl font-bold text-gray-600'>Nuevo Password</label>
           <input
             id="password"
             type="password"
             placeholder='Escribe tu Nuevo Password'
             className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
             value={password}
             onChange={e=>setPassword(e.target.value)} 
           />
        </div>
        <input
         type="submit"
         value="Guardar Nuevo Password"
         className='w-full bg-sky-700 text-white uppercase py-3 font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors'
           
        />
       </form>

      )}
      {/*Cuando el state de passwordModificado sea true se ejecuta el link*/}
      
      {passwordModificado && 
      (
   
        <Link
          to='/'
          className='block uppercase text-center my-5 text-sm text-slate-500'
        >Inicia Sesión</Link>

      ) 
      }

      </>
  )
}

export default NuevoPassword