import React, { useCallback, useState } from 'react'
import "./App.css"
import { Incrementar } from './components/Incrementar'

export const CallbackComponent = () => {

    //estado
const[counter,setCounter]=useState(0)

//fnx incrementar
 const incrementarContador = useCallback((val) =>{
    setCounter(contador => contador+val)
 }, [])
 //contador esta dentro de setcounter, y es hace referencia al this, lo q tenga setcounter + val
 //es un argumento para llamar al contenido de setcounter, q tiene counter dentro. 
 

console.log("callbacks")
  return ( 
    <div>
     <h1>Use Callbacks y Memo</h1>
     <h2>Contador:</h2>
     <p>{counter}</p>
     <Incrementar incrementarContador={incrementarContador}/>
    </div>
  )
}
