import axios from "axios";
import React, { useEffect, useState } from "react";

export function View() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5010/view").then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);
  let img = "https://w7.pngwing.com/pngs/545/374/png-transparent-computer-icons-running-avatar-heroes-text-sport.png"
  return(
    <>
    {
      detail.map((val,ind)=>{
        return(
          <>
          <h1>Type : <ins>{val.type}</ins></h1>
          <h1>Duration : <ins>{val.duration}</ins></h1>
          
          </>
        )
      })
    }
    </>
  )
   
}
    