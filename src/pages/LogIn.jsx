import { useNavigate } from "react-router-dom"
import { useUserContext } from "../providers/UserProvider"
import { useState } from "react"
import { login } from "../services/api"

const LogIn = () => {
   const navigate = useNavigate()
   const {setUser} = useUserContext()
   const [u, setU] = useState({username: '', password: ''})

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const handleLogIn = async () => {
      const response = await login(u)
      setUser(response) 
      goNavigate("/home")
   }

   return(
      <div>
         <button type="button" onClick={() => goNavigate("/")}>Back</button>
         <br />   
         <br />   
         <input type="text" placeholder="username" onChange={(e) => setU({...u, username: e.target.value})} />
         <input type="password" placeholder="password" onChange={(e) => setU({...u, password: e.target.value})} />
         <button onClick={handleLogIn}>Log in</button> 
         <br />
         <br />   
         <button type="button" onClick={() => goNavigate("/register")}>register</button>
      </div>
   )
}

export default LogIn