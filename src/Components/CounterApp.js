import { useState } from 'react';




const CounterApp = () => {
    const [count, setCount] = useState(0)

      function increase(){
          setCount(count+1)
      }

    return (
        <div>

            <h1> Value : {count} </h1>
            
            <button onClick={increase}> Increase </button>
            <button onClick={()=> setCount(count-1)}> Decrease </button>
            <button onClick={()=>setCount(0)}> Reset </button>
        </div>
    )
}

export default CounterApp;