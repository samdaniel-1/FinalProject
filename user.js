import React from "react";

function User(){
    let linkstyle = {
        color:"white"
    }
    return(
        <>
        <p style={{fontFamily:"cursive"}}><blockquote>"You have the shekel and hammer, only thing is you wanted<br/> to use it to shape your life"</blockquote></p>
       <img src="https://i.pinimg.com/originals/42/1e/54/421e541561d24747b52c489f1471a43b.jpg" height="300"/>
        <a style={linkstyle} className="btn btn-warning m-5 w-25" href="http://localhost:3000/"><b>Home</b></a>
        <h1>Select option</h1>
        <a style={linkstyle} className="font-weight-bold btn btn-success m-2 w-25 " href="http://localhost:3000/workout"><b>Workout</b></a> <a href="http://localhost:3000/Goal" className="btn btn-success w-25 m-2"><b>Goal</b></a><br/>
        <a href="" className="btn btn-primary w-25 m-2"><b>Progress</b></a>
        </>
    )
}
export default User