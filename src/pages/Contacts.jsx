import {useNavigate} from 'react-router-dom';
import LoggedNavBar from '../components/LoggedNavBar';
const Contacts = () => {
   const navigate = useNavigate()

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const listContacts = () => {

   }

   return (
      <>
         <LoggedNavBar/>
      </>
   )
}

export default Contacts