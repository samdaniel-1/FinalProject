import React from "react";
function Home(){
    let linkstyle = {
        color:"white"
    }
    return(
        <>
        <h1>Fitness Tranking App</h1>
        <p>We will change your lifestyle to fit Life with tracking your fitness with our Application</p>
        <a style={linkstyle} className="btn btn-success m-2 w-25 font-weight-bold" href="http://localhost:3000/user">Start</a>
        </>
    )
}
export default Home