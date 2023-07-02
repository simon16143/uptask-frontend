import {BrowserRouter,Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout.jsx"
import Login from "./paginas/Login.jsx"
import Registrar from "./paginas/Registrar.jsx"
import OlvidePassword from "./paginas/OlvidePassword.jsx"
import NuevoPassword from "./paginas/NuevoPassword.jsx"
import Confirmar from "./paginas/Confirmar.jsx"



function App() {
  
  return (
    <BrowserRouter>
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
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
