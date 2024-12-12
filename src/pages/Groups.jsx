import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar.jsx';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import GroupForm from '../components/GroupForm/GroupForm.jsx';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getGroups } from '../services/api';

const Groups = () => {
   const navigate = useNavigate();
   const [modalShow, setModalShow] = useState(false);
   const [groups, setGroups] = useState()

   const goNavigate = (dir) =>{
      navigate(dir)
   }

   const listGroups = () => 
   groups?.map((data)=>{
      console.log(data)
      return (
      <ListGroup.Item action onClick={()=> goNavigate("/group/" + data.id)} >
         {data.name} <br /> {data.description}
      </ListGroup.Item>)
   })     

   useEffect(()=>{
      getGroups().then(data =>{
         setGroups(data)
      })
   }, [])
   
   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >
                  
               <h1>Groups</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container className="d-flex flex-column gap-3">
                     <Container className="d-flex gap-2">
                        <h2 className=" align-self-center mb-0">Groups list</h2>
                        <Button className='ms-auto' variant="primary" onClick={() => setModalShow(true)}>New group</Button>
                     </Container>
                        <ListGroup>
                           {listGroups()}
                        </ListGroup>
                  </Container>
               </Container>
            </Container>
         </Container>
         <GroupForm show={modalShow} onHide={() => setModalShow(false)}/>
      </>
   )
}

export default Groups;