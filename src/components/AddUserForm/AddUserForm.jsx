import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import {getUsers, updateGroupUsers} from '../../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from '../../providers/UserProvider';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from 'react-router-dom';

const AddUserForm = (props) => {
  const {user} = useUserContext();
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);

  useEffect(()=>{
    getUsers().then(data => {
      setUsers(data);
    })
  }, [props.updateUsers]);

  const handleCheckboxChange = (userId) => {
    setNewUsers(prevState => {
      if (prevState.includes(userId)) {
        return prevState.filter(id => id !== userId);
      } else {
        return [...prevState, userId];
      }
    });
  };

  const listUsers = () => users?.map((data) => { 
    if(data.id !== user.id && !users.includes(data.id))
      return (
        <ListGroup.Item key={data.id} className='d-flex justify-content-between align-items-center'>
          <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          onChange={() => handleCheckboxChange(data.id)}
          checked={newUsers.includes(data.id)}
        />
          <p style={{margin: 0}}>{data.username}</p>
        </ListGroup.Item>
      ) 
  });

  const handleCreation = async () => {
      await updateGroupUsers(id, newUsers);
      props.updateUsers();
      props.onHide();
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
            <Row className="mb-3">
              <ListGroup>
                {listUsers()}
              </ListGroup>
            </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCreation}>Add</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default AddUserForm;

