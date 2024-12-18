import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar.jsx';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import GroupForm from '../components/GroupForm/GroupForm.jsx';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { deleteGroup, getGroupsByUserId } from '../services/api';
import {useUserContext} from '../providers/UserProvider';
import {Trash} from 'react-bootstrap-icons';

const Groups = () => {
   const {user} = useUserContext();
   const navigate = useNavigate();
   const [modalShow, setModalShow] = useState(false);
   const [groups, setGroups] = useState();

   const goNavigate = (dir) =>{
      navigate(dir)
   }

   const handleDeleteGroup = async (id, e) =>{
      e.stopPropagation();
      await deleteGroup(id);
      updateGroups();
   }

   useEffect(() => {
      updateGroups();
   }, []);
   
   const updateGroups = () => {
      getGroupsByUserId(user.id).then(data => {
         setGroups(data)
      });
   };


   const listGroups = () => 
      groups?.map((data) => {
         if(data.ownerId === user.id){
            return (
               <ListGroup.Item key={data.id} className='d-flex' action onClick={()=> goNavigate("/group/" + data.id)}>
                  <Container>
                     <h5>{data.name}</h5>
                     <p style={{margin: 0}}>{data.description}</p>
                  </Container>
                  <Button className='align-self-center' onClick={(e) => handleDeleteGroup(data.id,e)} variant="outline-danger" size="sm">
                     <Trash size={15} />
                  </Button>
               </ListGroup.Item>)
         }else{
            return (
               <ListGroup.Item key={data.id} action onClick={()=> goNavigate("/group/" + data.id)}>
                  <Container>
                     <h5>{data.name}</h5>
                     <p style={{margin: 0}}>{data.description}</p>
                  </Container>
               </ListGroup.Item>)
         }  
      });
      
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
      <GroupForm show={modalShow} updateGroups={updateGroups} onHide={() => setModalShow(false)}/>
      </>
   )
}

export default Groups;