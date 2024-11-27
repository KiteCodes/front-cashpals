import { useNavigate } from "react-router-dom"

const LogIn = () => {
   const navigate = useNavigate()

   function goBack() {
      navigate("/")
   }
   function handleClick() {
      navigate("/register")
   }
   return(
      <div>
         <button type="button" onClick={goBack}>Back</button>
         <button type="button" onClick={handleClick}>register</button>
      </div>
   )
}

export default LogIn