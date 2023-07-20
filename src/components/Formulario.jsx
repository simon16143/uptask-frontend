import {useState} from 'react'
import useProyectos from '../hooks/useProyectos'
import Alerta from './Alerta'



const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fechaEntrega, setFechaEntrega] = useState('')
  const [client, setClient] = useState('')
  const {mostrarAlerta,alerta,submitProyecto} = useProyectos()
  

  
  const handleSubmit = async e =>{
    e.preventDefault()
    if([nombre,descripcion,fechaEntrega,cliente].includes('')){
       mostrarAlerta({
        msg:"Todos los campos son obligatorios",
        error:true
       })
       return
      }
      //Pasar los datos hacia el provider
      await submitProyecto({nombre,descripcion,fechaEntrega,client })
      setNombre('')
      setDescripcion('')
      setFechaEntrega('')
      setClient('')
  }

  const {msg} = alerta


  return (
    <>
        
        <form onSubmit={handleSubmit} className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'>  
              {msg && <Alerta alerta={alerta}/>}                
            <div className='mb-5'>
                <label htmlFor='nombre' className='font-bold text-gray-700 uppercase text-sm'>Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Nombre del proyecto'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='descripcion' className='font-bold text-gray-700 uppercase text-sm'>Descripcion</label>
                <textarea
                    id="descripcion"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Descripcion del proyecto'
                    value={descripcion}
                    onChange={e=>setDescripcion(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='fechaEntrega' className='font-bold text-gray-700 uppercase text-sm'>Fecha Entrega</label>
                <input
                    id="fechaEntrega"
                    type="date"
                    className='border-2 w-full p-2 mt-2  rounded-md'
                    value={fechaEntrega}
                    onChange={e=>setFechaEntrega(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='cliente' className='font-bold text-gray-700 uppercase text-sm'>Cliente</label>
                <input
                    id="cliente"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Nombre del cliente'
                    value={client}
                    onChange={e=>setClient(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value="Crear Proyecto"
                className='bg-sky-600 text-white p-3 w-full font-bold uppercase rounded-md cursor-pointer hover:bg-sky-800 transition-colors'
            />
        </form>
    
    </>
  )
}

export default Formulario