import React, {useState} from "react";
import PackageContext from "./Context";

const Provider = (props) => {
   const [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 42,
        role: "Batsman"
   });
   return(
    <PackageContext.Provider value={
       {
         data: cricketer,
         updateAge: ()=> (setCricketer({...cricketer, age: cricketer.age+1 }))
      } 
    }>
        {props.children}
    </PackageContext.Provider>
   )
}
export default Provider;