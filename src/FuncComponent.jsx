import { Fragment } from "react";
import { useState } from "react";


export default function Func ({name}){
    const [number,setNumber]=useState(30)
    const [color,setColor]=useState('green');
    const [toggle,setToggle]=useState(false)
    const [toggle1,setToggle1]=useState(false)
    function add(){
        setNumber(number+1)
    }
    // const changeColor=()=>{
    //    if(color==='green'){
    //     setColor('blue')
    //    }else{
    //     setColor('green')
    //    }
    // }
 
    return(
        <>
        {toggle ?  <h2 style={{color:color}}>jisht </h2> : <h2 style={{color:color}}>sxal </h2> }
        <p>{number}</p>
        <button onClick={add}>+</button>
        <button onClick={()=>color==='green' ? setColor('blue') :  setColor('green')}>changeColor</button>
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
        {toggle1 && <h2>true</h2>}
        <button onClick={()=>setToggle1(!toggle1)}>toggle1</button>
        </>
    )
}