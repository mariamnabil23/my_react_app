import { useState } from "react";

function Input(props){
    let [value , setvalue] = useState("unknown");
    return(
    <>
    <label>{props.title}</label>
    <br></br>
    <span>{value}</span>
    <input type={props.type} onChange={(event)=>{
        console.log(event.target.value);
        setvalue(event.target.value);
    }} ></input>
    </>
    )
}
export default Input;