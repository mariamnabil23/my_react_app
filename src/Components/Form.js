import React, { useState } from "react";

function Form(){
    const [name , setname] = useState('');
    const [pass , setpass] = useState('');
    const [gender , setgender] = useState('');

    const NameHandler =(value)=>{
        setname(value);
    }
    const PassHandler =(value)=>{
        setpass(value);
    }
    const GenderHandler =(value)=>{
        setgender(value);
    }

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log("submitted ......")
            console.log(
                {name , pass , gender}
            );
        }}>
            <label>Name:</label>
            <input type="text" placeholder="your name .." onChange={(event)=>{
                NameHandler(event.target.value);
            }}></input>
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder="your password .." onChange={(event)=>{
                PassHandler(event.target.value);
            }}></input>
            <br></br>
            <label>Gender</label>
            <select onChange={(event)=>{
                GenderHandler(event.target.value);
            }}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

export  default Form;