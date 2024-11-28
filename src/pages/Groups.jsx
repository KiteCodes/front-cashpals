import {useNavigate} from 'react-router-dom';

const Groups = () => {
   const navigate = useNavigate()

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const listGroups = () => {

   }

   return (
      <>
         <button onClick={()=> goNavigate("/home")}>Home</button>
         <button onClick={() => goNavigate("/group/1")}>Group 1</button>
      </>
   )
}

export default Groups