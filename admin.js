import axios from "axios";
import React, { useEffect, useState } from "react";
import { View } from "./view";

function Admin(){
    const handleSumbit = (e) =>{
    let adname = document.getElementById("adname").value;
    let password = document.getElementById("pass").value;
        if(adname==="Admin" && password ==="Ab12@1"){
            alert("Login Succesfull");
            
        }
        else{
            alert("Incorrect username or password")
        }
    }
    // const [det,setDet] = useState([]);
    // let admin;
    // let pass;
    // useEffect(()=>{
    //     axios.get("http://localhost:5010/verify").then((res)=>{
    //         console.log(res.data);
    //         setDet(res.data);
    //         console.log(det.Admin_name)
    //     })
    // },[])
    return(
        <>
        <form onSubmit={handleSumbit}>
        <label>Username: </label> <input type="text" placeholder="username" id="adname"/>
        <label>password: </label> <input type="password" placeholder="Password" id="pass"/>
        <button type="submit" onClick={(a)=>{
            console.log(a);
            let key={
                id:a
            }
        }}>Submit</button>
        </form>
        </>
    )
    
    
}
export default Admin