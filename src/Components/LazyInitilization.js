
import { useState } from 'react';


// function hello(){
//     console.log("I am executing...")
//     return 0
// }


const LazyInitilization = () => {
    const [count, setCount] = useState(()=>{
        console.log("I am executing...")
        return 0
    })

    return (
        <div>
            <h1> Value : {count} </h1>
            <button onClick={()=>setCount(count+1)}> Increase </button>
        </div>
    )
}

export default LazyInitilization;

// for(let i=0; i<10; i++){
//     console.log(i);
// }