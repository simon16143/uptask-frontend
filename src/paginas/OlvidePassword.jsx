import {useState} from "react"
import {Link} from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, SetAlerta] = useState({})
  
  const handleSubmit = async e => {
    e.preventDefault();
    if(email === '' || email.length < 6){
      SetAlerta({
        msg:"El email es obligatorio",
        error:true
      })
      return
    }
    try{
      //TODO:Mover hacia un cliente axios
      const {data} = await clienteAxios.post('/usuarios/olvide-password', {email})
      SetAlerta({
        msg: data.msg,
        error: false
      })
    }
    catch(e){
      SetAlerta({
        msg:e.response.data.msg,
        error:true
      })
    }
  
  }
  const {msg} = alerta
  return (
    <>
      <h1 className="text-sky-600 text-6xl font-black capitalize">Recupera el acceso a tus 
        <span className="text-slate-700"> proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      <form className="bg-white  my-10 p-5 shadow rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label htmlFor="email" className="text-gray-600 font-bold text-xl block uppercase">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Introduce tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Recuperar Acceso"
          className="bg-sky-700 w-full py-3 uppercase text-white font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="text-slate-600 text-center block uppercase text-sm my-5"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          to="/registrar"
          className="text-slate-600 text-center block uppercase text-sm my-5"
        >
          ¿No tienes cuenta? Regístrate 
        </Link>
      </nav>
    </>
  )
}

export default OlvidePassword