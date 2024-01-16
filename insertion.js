import axios from "axios";
import User from "./user";
import { createContext } from "react";

export function InsertWorkout(){
    const handleSumbit = (e)=>{
        e.preventDefault()
    let type = document.getElementById("Type").value;
    let duration = document.getElementById("Duration").value;
    let intensity = document.getElementById("Intensity").value;
    let date = document.getElementById("Date").value;
    let distance = document.getElementById("Distance").value;
    let create_at = document.getElementById("Created_at").value;
    let updated_at = document.getElementById("Updated_at").value;
    let key = {
        type:type,
        duration:duration,
        intensity:intensity,
        date:date,
        distance:distance,
        create_at:create_at,
        updated_at:updated_at
    }
    axios.post("http://localhost:5010/insertWorkout",key).then((res)=>{
        console.log(res);
        if(res.data.status==="inserted"){
            alert("Values are inserted");
            window.location.href="/user"

        }
        else
        alert("Not inserted")
    })
    }

    return(
        <>
        <h1 className="m-3 text-info" >Fill the details of your Goal first and keep the fixed interval then fill the workout</h1>
        <form className="d-flex flex-column justify-content-center m-2" onSubmit={handleSumbit}>
        <label><b>Type: </b></label><input type="text" placeholder="Eg: Running,Weightlifting,yoga etc." id="Type"/><br/>
        <label><b>Duration: </b></label><input type="text" placeholder="Required in Minutes" id="Duration"/><br/>
        <label><b>Intensity: </b></label><input type="text" placeholder="Low, Medium or High" id="Intensity"/><br/>
        <label><b>Date: </b></label><input type="date" id="Date"/><br/>
        <label><b>Distance: </b></label><input type="text" placeholder="Required in KMs" id="Distance"/><br/>
        <label><b>Created_at: </b></label><input type = "datetime-local" id="Created_at"/><br/>
        <label><b>Updated_at: </b></label><input type="datetime-local" id="Updated_at"/><br/>
        <button onClick={(a)=>{
            console.log(a)
            let key = {
                id:a
            }
        }} className="btn btn-success m-5">Submit</button>
        <a href="http://localhost:3000/user" className="btn btn-warning">Back</a>
        </form>
        </>
    );
}
export function InsertGoal(){
    const handleSumbit = (e)=>{
    let type = document.getElementById("Type").value;
    let target = document.getElementById("Target").value;
    let progress = document.getElementById("Progress").value;
    let deadline = document.getElementById("Deadline").value;
    let description = document.getElementById("Description").value;
    let status = document.getElementById("Status").value;
    let created_at = document.getElementById("Created_at").value;
    let updated_at = document.getElementById("Updated_at").value;
    let key = {
        type:type,
        target:target,
        progress:progress,
        deadline:deadline,
        description:description,
        status:status,
        created_at:created_at,
        updated_at:updated_at
    }
    axios.post("http://localhost:5010/insertGoal",key).then((res)=>{
        console.log(res);
        if(res.data.status==="inserted")
        {
        alert("Value inserted")
        window.location.href = "/user"
        }
        else
        {
        alert("Value not inserted")
    }
    })
    }
    return(
        <>
        <h1 className="m-3 text-info" >Fill the exercise details here we will make you informed with te help of progress options</h1>
        <form className="d-flex flex-column justify-content-center m-2" onSubmit={handleSumbit}>
        <label><b>User_id: </b></label><input type="text" placeholder="Your Id" className="m-2" id="Id"/><br/>
        <label><b>Type: </b></label><input type="text" placeholder="Your type" className="m-2" id="Type"/><br/>
        <label><b>Target: </b></label><input type="text" placeholder="Target in Distance or Nos" id="Target" /><br/>
        {/* <label><b>Progress: </b></label><input type="text"  id="Progress"/><br/> */}
        <label><b>Deadline: </b></label><input type="date" id="Deadline"/><br/>
        {/* <label><b>Distance: </b></label><input type="text" id="Description"/><br/> */}
        <label><b>Status: </b></label><input type="text" placeholder="Active or passive" id="Status"/><br/>
        <label><b>Created_at: </b></label><input type = "datetime-local" id="Created_at" defaultValue/><br/>
        <label><b>Updated_at: </b></label><input type="datetime-local" id="Updated_at"defaultValue/><br/><br/>
        <button type="submit" onClick={(a)=>{
            console.log(a)
            let key = {
                id:a
            }
        }} className="btn btn-success m-5">Submit</button>
        <a href="http://localhost:3000/user" className="btn btn-warning">Back</a>
        </form>
        </>
    );
}
