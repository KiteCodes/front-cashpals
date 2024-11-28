import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Arrival = () => {
   const navigate = useNavigate()

   const [u, setU] = useState({username: '', password: ''})

   const goNavigate = (dir) =>{
     navigate(dir)
   }
   
   return (
      <div>
         <button type="button" onClick={() => goNavigate("/login")}>Log in</button>
         <button type="button" onClick={() => goNavigate("/home")}>Home</button>
      </div>
   )
}

export default Arrival