import { useNavigate } from "react-router-dom"

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
         <button onClick={()=> goNavigate("/profile")}>Profile</button>
         <button onClick={()=> goNavigate("/groups")}>Groups</button>
         <button onClick={()=> goNavigate("/contacts")}>Contacts</button>
      </>
   )
}

export default Home