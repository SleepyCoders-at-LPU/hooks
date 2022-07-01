import LearnUseEffect2 from "./LearnHooks/LearnUseEffect2";
import PackageContext from "./LearnContext/Context";
import Provider from "./LearnContext/Provider";


const Smile=()=>{
   return(
       <PackageContext.Consumer>
           {
                (value)=> (
                     <div>
                         <h1>Name of cricketer is: {value.data.name}</h1>
                         <h2>Age of {value.data.name} is {value.data.age}</h2>
                         <h3>and {value.data.name} is a very good {value.data.role}</h3>
                     </div>
                )
           }
       </PackageContext.Consumer>
   )
}
   



const App = () => {
  return (
    <div>
          {/* <LearnUseEffect2 /> */}
          <h1>hello</h1>
          <Provider>
              <Smile />
          </Provider>


       {/* <LearnState  name="abhi1"> 
          <h1>Hey</h1>
          <p>Hey a apara</p>
       </LearnState>
       <LearnState  name="abhi2"/>
       <LearnState  name="abhi3">
          <h1>Hey</h1>
          <p>Hey a apara</p>
        </LearnState> */}
    </div>
  );
}

export default App;