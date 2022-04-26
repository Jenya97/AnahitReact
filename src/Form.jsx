import { useState } from "react"


const Form =()=>{
    const [poxos,setPoxos]=useState('')
    return(
        <>
        <input type="text" value={poxos} onChange={(e)=>setPoxos(e.target.value)}/>
        {poxos}
        </>
    )

}

export default Form