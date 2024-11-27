import { useNavigate } from "react-router-dom"

const Register = () => {
   const navigate = useNavigate()
   function handleClick() {
      navigate("/login")
   }
   return(
      <div>
         <button type="button" onClick={handleClick}>Register</button>
      </div>
   )
}

export default Register