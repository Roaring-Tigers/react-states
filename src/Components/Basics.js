import React,{useState} from 'react';

// usestate as Hooks or Special Functions

console.log("I am outside the component")
 let q = 10 

 const Basics = () => {

    let [p, setP] = useState(100)  

    console.log("I am inside the component")
    
     function increaseP(){
        setP(p+1)
     }

    

     function increaseQ(){
        q = q + 1
        console.log(q)
     }
     
    

    return(
        <div>
             <h1> Value : {p} </h1>
             <button onClick={increaseP}> IncreaseP </button>

             <h1> Value : {q} </h1>
            <button onClick={increaseQ}> IncreaseQ </button>
        </div>
    )
}

export default Basics;



//  [p,q] = [100, f]
    // console.log(x[0]) //100
    // console.log(x[1]) // f
    // let [b,c] = x


    // let a = 10

    // function increase(){
    //     a = a + 1
    //     console.log(a)
    // }


     //kite => setKite 
    // helloWorld => setHelloWorld