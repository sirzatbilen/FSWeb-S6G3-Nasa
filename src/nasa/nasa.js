import React from "react";


function Nasa(props){
    const {data,dateChanger}= props;
    return (
    <><div className="date-content">
      <button onClick={()=> dateChanger(-1)}>azalt</button>
      <p>{data.date}</p>
      <button onClick={()=> dateChanger(1)}>arttır</button>
    </div> 
    <h1>{data.title}</h1>
    <img src={data.url} alt={data.title}/>
    <p>{data.explanation}</p>
    <p>{data.copyright}</p> </> )
}

export default Nasa