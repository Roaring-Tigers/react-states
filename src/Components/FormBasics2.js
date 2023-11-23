import { useState } from "react";

const FormBasics2 = () => {
    let [name, setName] = useState("")





    return(
        <div>
             <form>
                  <input type="text" placeholder="Enter ur name"  />
                  <button type="submit"> Submit </button>
             </form>

             <p></p>
        </div>
    )
}

export default FormBasics2;