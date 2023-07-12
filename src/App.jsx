import {BrowserRouter,Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout.jsx"
import RutaProtegida from "./layouts/RutaProtegida.jsx"
import Login from "./paginas/Login.jsx"
import Registrar from "./paginas/Registrar.jsx"
import OlvidePassword from "./paginas/OlvidePassword.jsx"
import NuevoPassword from "./paginas/NuevoPassword.jsx"
import Confirmar from "./paginas/Confirmar.jsx"
import { AuthProvider } from "./context/AuthProvider.jsx"
import NuevoProyecto from "./paginas/NuevoProyecto.jsx"



function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          {/*Agrupa un grupo de pag de tipo publicas*/}
          <Route path="/" element={<AuthLayout/>}>
            {/*Invoco a los diferentes paginas de caracter publico*/}
                <Route index element={<Login/>}/> 

                <Route path="registrar" element={<Registrar/>}/>
                <Route path="olvide-password" element={<OlvidePassword/>}/>
                <Route path="nuevo-password/:token" element={<NuevoPassword/>}/>
                <Route path="confirmar/:id" element={<Confirmar/>}/>
            </Route>
          {/*Sección de ruta protegida*/}
            <Route path="/proyectos" element={<RutaProtegida/>}>
               <Route index element={<NuevoProyecto/>}/> 

            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
