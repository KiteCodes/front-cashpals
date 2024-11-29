import { useNavigate } from "react-router-dom"
import LoggedNavBar from "../components/LoggedNavBar"

const Home = () => {
   const navigate = useNavigate()

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const listLatestGroup = () =>{
      <div>

      </div>
   }

   const listBalance = () =>{
      <>
         <div>
            te deben logic
         </div>
         <div>
            debes logic
         </div>
      </>
   }

   return (
      <LoggedNavBar/>
   )
}

export default Home