import {Link} from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 text-6xl font-black capitalize">Recupera el acceso a tus 
        <span className="text-slate-700"> proyectos</span>
      </h1>
      <form className="bg-white  my-10 p-5 shadow rounded-lg">
        <div className="my-5">
          <label htmlFor="email" className="text-gray-600 font-bold text-xl block uppercase">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Introduce tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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