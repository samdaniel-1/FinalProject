import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InsertGoal, InsertWorkout } from "./insertion";
import { View } from "./view";
import User from "./user";
import Home from "./home";
import Admin from "./admin";
function Root(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/workout" element={<InsertWorkout/>}/>
        <Route path="/Goal" element={<InsertGoal/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default Root