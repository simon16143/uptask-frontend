import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"

const Confirmar = () => {
  const[alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  //Extraigo el id de la url
  const params = useParams()
  //hago destructuring y me quedo con el id
  const {id} = params
  //una vez el componente cargue almaceno el id 
  useEffect(()=>{
    const confirmarCuenta = async() =>{
      //con esta funcion voy a interactuar con el backend
      try{
        const url = `http://localhost:3000/api/usuarios/confirmar/${id}`
        //se crea esta variable llamada data si todo sale bien
        const {data} = await axios.get(url)
        setAlerta({
          msg:data.msg,
          error:false
        })
        setCuentaConfirmada(true)
      }
      catch(e){
        setAlerta({
          msg: e.response.data.msg,
          error: true,
        })

      }
    }
    confirmarCuenta()

  },[])
  const {msg} = alerta
  return (
    <>
      <h1 className='text-sky-600 text-6xl font-black capitalize'>Confirma tu cuenta y comienza a crear tus {''} 
          <span className='text-slate-700'>proyectos</span>
        </h1>
        <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
          {/*Llamo al componente Alerta y le paso el prop alerta */}
          {msg && <Alerta alerta={alerta}/>}
          {cuentaConfirmada && (
              <Link
                to="/"
                className='block uppercase text-center my-5 text-sm text-slate-500'
              >
                Inicia sesión
            </Link>
          )}
        </div>
    
    </>
    )
}

export default Confirmar