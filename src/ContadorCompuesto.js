import React, { useMemo, useState } from 'react'
import "./App.css"



export const ContadorCompuesto = () => {
 

  //estados
   const numeros=[2,3,4,5,6,7,8,]
   const[listanumeros,setListanumeros]=useState(numeros)
   const [show,setShow]=useState(true)

//memo
const getCalculo=(listanumeros)=>useMemo(()=>{
        console.log("calculando")
        return listanumeros.reduce((a,b)=>(a*b))
    },[listanumeros])
    
//fnx agregar numero
const agregarNumero=()=>{
setListanumeros([...listanumeros, listanumeros[listanumeros.length -1]+1])
console.log(listanumeros)
}



//button
const onButton=()=>{
    setShow(!show)
}

  

    return (
   <>
   <h1>Numeros Compuestos y UseMemo</h1>
   <h2>Resultado : </h2>
   <p>{  getCalculo(listanumeros)}</p>
   <button onClick={onButton}> {show ? "Show" : "Hide"}</button>
   <button onClick={agregarNumero} >Agregar numero</button>
   </>
  )
}
