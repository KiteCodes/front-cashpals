import { useNavigate } from "react-router-dom"
import { useUserContext } from "../providers/UserProvider"
import { useState } from "react"
import { login } from "../services/api"

const LogIn = () => {
   const navigate = useNavigate()
   const {setUser} = useUserContext()
   const [u, setU] = useState({username: '', password: ''})

   function goBack() {
      navigate("/")
   }

   function register() {
      navigate("/register")
   }

   const handleClick = async () => {
      const response = await login(u)
      setUser(response)
      navigate("/home")
   }

   return(
      <div>
         <button type="button" onClick={goBack}>Back</button>
         <br />   
         <br />   
         <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
         <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />
         <button onClick={handleClick}>Log in</button> 
         <br />
         <br />   
         <button type="button" onClick={register}>register</button>
      </div>
   )
}

export default LogIn