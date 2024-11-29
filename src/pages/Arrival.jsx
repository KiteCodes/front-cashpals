import { useState } from "react"
import { useUserContext } from "../providers/UserProvider"
import NavBar from "../components/NavBar"


const Arrival = () => {
   const {setUser} = useUserContext()
   const [u, setU] = useState({username: '', password: ''})
   return (
         <NavBar/>
   )
}

export default Arrival