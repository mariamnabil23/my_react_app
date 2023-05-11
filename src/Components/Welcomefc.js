import React , {useState} from "react";

function Welcomefc(props){
    let [counter , setcounter] = useState(0);
    let [initname , upname] = useState("ali");
    console.log(props);
    return(
        <>
        <h1>hello {props.name}</h1>
        <h6>{counter} & {initname}</h6>
        <button onClick={()=>{
            setcounter(counter++);
            upname("mona");
        }}>+</button>
        </>
    )
}

export default Welcomefc;