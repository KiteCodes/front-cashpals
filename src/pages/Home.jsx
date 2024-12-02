import { useNavigate } from "react-router-dom"
import LoggedNavBar from "../components/LoggedNavBar"
import { Container } from "react-bootstrap"

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
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" >
               <h1>Your Balance</h1>
               <Container>
                  Contenido
               </Container>
            </Container>
            <Container fluid className="d-flex justify-content-center align-items-center" >
               <h1>Recent Groups</h1>
            </Container>
         </Container>
      </>
      
   )
}

export default Home