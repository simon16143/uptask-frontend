import {useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'
//Creando el context de los proyectos
const ProyectoContext = createContext()

const ProyectosProvider = ({children}) => {
    const [proyectos, setProyectos] = useState([])
    const [alerta, setAlerta] = useState([])
    const navigate = useNavigate();

    const mostrarAlerta = alerta =>{
        setAlerta(alerta)
        setTimeout(()=>{
            setAlerta({})
        },5000)
    }
    //aqui recibimos la trama del proyecto desde formulario.jsx
    //aqui la guardaremos en la base de datos
    const submitProyecto = async proyecto => {
     
        try{
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers:{
                    'Content-Type':'application/json',
                     Authorization:`Bearer ${token}`
                }
            }
            //orden: Url, Trama, Config
           const {data} = await clienteAxios.post('/proyectos',proyecto, config)
           console.log(data) 
           setAlerta({
            msg: "Proyecto creado correctamente",
            error:false
           })
           setTimeout (()=>{
            setAlerta({})
            navigate('/proyectos')
           })
        }
        catch(e){
            console.log(e)
        }        
    }
    return(

        <ProyectoContext.Provider value={{
            proyectos,
            mostrarAlerta,
            alerta,
            submitProyecto
            }}>
            {children}
        </ProyectoContext.Provider>
    


    )
        

}
//siempre se exporta el provider si en default
export {
    ProyectosProvider
}
//siempre se exporta por default el context completo
export default ProyectoContext