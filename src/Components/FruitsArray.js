import { useState } from "react";


const FruitsArray = () => {

   const [fruits, setFruits] = useState(["apple", "mango", "banana"])

   const [newFruit, setNewFruit] = useState("")
    
   console.log(fruits);
   console.log(newFruit);

   function addNewFruit(e){
         e.preventDefault();
        setFruits([...fruits, newFruit])
        setNewFruit("")
   }


    return(
        <div>
             <form>
                  <input type="text"  placeholder="enter new fruit"
                    onChange={e => setNewFruit(e.target.value)}
                    value={newFruit}
                  />
                  <button type="submit" 
                   onClick={addNewFruit}
                  >submit</button>
             </form>
              
              <p> {fruits.join(",")} </p>

        </div>
    )
}

export default FruitsArray;