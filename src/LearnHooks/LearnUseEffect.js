import React, {useState, useEffect} from "react";

const LearnUseEffect = () => {
    const [gold, setGold] = useState(10);
    const [elixir, setElixir] = useState(10);
     
      useEffect(
        () =>{
            console.log("useEffect");
            document.title = `G: ${gold} E: ${elixir}`;
        },[gold]
      )

    return(
        <div>
             <h1>Gold is {gold} elixir is {elixir}</h1>
             <button onClick={()=>setGold(gold+1)}>Gold</button>
             <button onClick={()=>setElixir(elixir+1)}>Elixir</button>
        </div>
    )
}

export default LearnUseEffect;