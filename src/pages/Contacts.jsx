import {useNavigate} from 'react-router-dom';
const Contacts = () => {
   const navigate = useNavigate()

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const listContacts = () => {

   }

   return (
      <>
         <button onClick={()=> goNavigate("/home")}>Home</button>
      </>
   )
}

export default Contacts