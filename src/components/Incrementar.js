import React from 'react'
//use react.memo(exportconst()=>{})
export const Incrementar = React.memo(({incrementarContador})=> {

    const onButton=(val)=>{
        incrementarContador(val)
    }
   console.log("incrementando")
    
  return (
   <button onClick={()=> onButton(100)} >Incrementar</button>
  )
})
