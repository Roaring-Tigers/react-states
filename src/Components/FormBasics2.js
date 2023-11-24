import { useState } from "react";

const FormBasics2 = () => {
    let [name, setName] = useState('')
    let [btnClick, setBtnClick] = useState("")

    console.log("Value of name",name)
    console.log("btnClick",btnClick)



    function submit(e) {
        e.preventDefault()
        setBtnClick(name)
        setName("")
    }
      
     return (
         <div>
             <div>
                 <form >
                     <input type="text" placeholder="enter"
                       onChange={e => {
                        setName(e.target.value)
                        setBtnClick("")
                    }}
                       value = {name}
                     />                 
                     <button type='submit'
                     onClick={submit}
                     >submiti</button>
                 </form>
                 {
                    btnClick !="" ? <p>{btnClick}</p> : ""
                 }
                

             </div>
         </div>
     );
}

export default FormBasics2;



// JSX => if else=> ternory


// controlled component and uncontrolled components