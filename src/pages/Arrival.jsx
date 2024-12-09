import { useState } from "react"
import { useUserContext } from "../providers/UserProvider"
import NavBar from "../components/NavBar"
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll"
import { Container } from "react-bootstrap"
import Footer from "../components/Footer/Footer.jsx"


const Arrival = () => {
   const {setUser} = useUserContext();
   const [u, setU] = useState({username: '', password: ''});

   return (
      <>
      <NavBar/>
      <Container style={{height: 1000}}/>
      <HorizontalScroll/>
      <Container style={{height: 1000}}/>
      <Footer/>
      </>      
   )
}

export default Arrival