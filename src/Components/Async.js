
import React,{useState} from "react";

const Async = () => {
 const [a, setA] = useState(0)
 const [b, setB] = useState(0)


 // setA =>  async


 function change(){
     let x = 100
      setA(x)  
      setB(2*x)
     
 }


    return(
        <div>
            <h1> Value : {a}, {b} </h1>
            <button onClick={change}> Increase </button>
        </div>
    )
}

export default Async;