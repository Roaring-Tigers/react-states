import { useState } from "react";

const FormBasics = () => {
    let [name, setName] = useState("")


    function updateName(event){
      setName(event.target.value)
    }



    return(
        <div>
             <form>
                 <input type="text" placeholder="Enter ur name" 
                  onChange={updateName}
                 />
             </form>

             <p>{name}</p>
        </div>
    )
}

export default FormBasics;