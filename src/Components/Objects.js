import {useState} from 'react';



 const Objects = () => {

    let [count, setCount] = useState({gold:0, silver:0, bronze:0})

       console.log(count) // {gold:0, silver:0, bronze:0}
    
       function increaseGold(){
            // setCount(count.gold = count.gold + 1) - dont update this variable directly
            // let newCount = {...count}
            // newCount.gold = newCount.gold + 1 
            // setCount(newCount)
            setCount({...count, "gold":count.gold+1})
       }
    
     
    

    return(
        <div>
             <h1> Gold: {count.gold} ,  Silver: {count.silver}, Bronze: {count.bronze} </h1>
             <button onClick={increaseGold}> IncreaseGold </button>
             <button onClick={()=>setCount({...count, silver:count.silver+1})}> IncreaseSilver </button>
             <button onClick={()=>setCount({...count, bronze:count.bronze+1})}> IncreaseBronze </button>

             
        </div>
    )
}

export default Objects;



// let a = 100 
// let b = 101

// a = b 

// count = {gold:0, silver:0, bronze:0}

// newCount = {gold:1, silver:0, bronze:0}
// count = newCount

