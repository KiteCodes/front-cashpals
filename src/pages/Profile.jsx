import {useNavigate} from 'react-router-dom';
const Profile = () => {
   const navigate = useNavigate()
   
   const goNavigate = (dir) =>{
     navigate(dir)
   }

   return (
      <>
         <button onClick={()=> goNavigate("/home")}>Home</button>
      </>
   )
}

export default Profile