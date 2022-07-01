import React,{useState} from 'react';


function check(){
    console.log("check")
    
}

const LearnState = (props)=>{
    
    //   console.log(props)
      let [count, setCount] = useState(
        () =>{check()
        return 0}
        )
      
     
    function increment(){
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
    }
     return(
        <div>
            <h1> My name is {props.name}</h1>
            {props.children}
            {/* <button onClick={increment}>+</button>
              <span>{count}</span>
            <button>-</button> */}
        </div>
     )
}

export default LearnState;