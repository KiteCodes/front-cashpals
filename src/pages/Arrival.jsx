import { useState } from "react"
import { useUserContext } from "../providers/UserProvider"
import { useNavigate } from "react-router-dom"

const Arrival = () => {
   const {setUser} = useUserContext()
   const navigate = useNavigate()

   const [u, setU] = useState({username: '', password: ''})

   function handleClick() {
      navigate("/login")
   }

   function navHome() {
      navigate("/home")
   }
   
   return (
      <div>
         <button type="button" onClick={handleClick}>Log in</button>
         <button type="button" onClick={navHome}>Home</button>
      </div>
   )
}

export default Arrival