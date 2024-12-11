import {useState} from "react";
import LoggedNavBar from "../components/LoggedNavBar/LoggedNavBar";
import { Trash } from 'react-bootstrap-icons';
import { Container, Button, ListGroup } from "react-bootstrap";
import {deleteTransaction, getTransactionByDebtorId, getTransactionByIndebtedId} from '../services/api';
import {useEffect} from 'react';
import {useUserContext} from '../providers/UserProvider';

const Home = () => {
   const {user} = useUserContext();
   const [debtorTransactions, setDebtorTransactions] = useState([]);
   const [indebtedTransactions, setIndebtedTransactions] = useState([]);

   useEffect(() => {
      getTransactionByDebtorId(user.id).then(data => {
         setDebtorTransactions(data)
      });
      getTransactionByIndebtedId(user.id).then(data => {
         setIndebtedTransactions(data)
      });
   }, []);

   const handleDeleteTransaction = async (id) =>{
      await deleteTransaction(id)
   }

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" >
               <h1>Your Balance</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
               <Container fluid className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px"}}>
                  <Container className="d-flex flex-column">
                     <p className="align-self-center">Deben</p>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        <ListGroup.Item className="d-flex justify-content-between">
                        <p className="align-self-center" style={{margin: 0}}>Link 1</p>
                        <Button onClick={() => handleDeleteTransaction(1)} variant="outline-primary" size="sm">
                        <Trash size={15} />
                        </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item style={{color: "red"}}>
                        This one is a button
                        </ListGroup.Item>
                     </ListGroup>
                  </Container>
                  <Container className="d-flex flex-column">
                  <p className="align-self-center">Debo</p>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item >
                        This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item>
                        This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item>
                        This one is a button
                        </ListGroup.Item>
                     </ListGroup>
                  </Container>
                  </Container>
               </Container>
            </Container>
         </Container>
      </>
      
   )
};

export default Home;