import React, {useState, useEffect} from "react";

const LearnUseEffect2 = () => {
    const [value, setValue] = useState(10);
    const [resource, setResource] = useState("posts");
    const [data, setData] = useState([]);

    useEffect(
        () =>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
       .then(response => response.json())
       .then(json => setData(json))
        },[resource]
    )
    
    return(
        <div>
        <div>
            <button onClick={()=>setValue(value+1)}>{value}</button>
            <button onClick={()=>setResource("posts")}>posts</button>
            <button onClick={()=>setResource("users")}>users</button>
            <button onClick={()=>setResource("todos")}>todos</button>
         </div>
            <h1>{resource}</h1>
           {data.map(item => {
            return <pre>JSON.stringify(item)</pre>
           })}
    </div>
    )
}

export default LearnUseEffect2;