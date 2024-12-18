import {useState} from "react";
import LoggedNavBar from "../components/LoggedNavBar/LoggedNavBar";
import { Trash } from 'react-bootstrap-icons';
import { Container, Button, ListGroup } from "react-bootstrap";
import {deleteTransaction, getTransactionByDebtorId, getTransactionByIndebtedId, getUsers} from '../services/api';
import {useEffect} from 'react';
import {useUserContext} from '../providers/UserProvider';

const Home = () => {
   const {user} = useUserContext();
   const [debtorTransactions, setDebtorTransactions] = useState();
   const [indebtedTransactions, setIndebtedTransactions] = useState();
   const [users, setUsers] = useState();

   useEffect(() => {
      updateUsers();
      updateTransactions();  
   }, []);

   const handleDeleteTransaction = async (id) =>{
      await deleteTransaction(id)
   }

   const updateTransactions = () => {
      getTransactionByDebtorId(user.id).then(data => {
         setDebtorTransactions(data)
      });
      getTransactionByIndebtedId(user.id).then(data => {
         setIndebtedTransactions(data)
      });
   }

   const updateUsers = () => {
      getUsers().then(data => {
         setUsers(data)
      });
   }

   const listNegativeTransactions = () => 
      indebtedTransactions?.map((data) => {
         if(!data.indebtedId.includes(data.debtorId)){
            const debtor = users?.find(user => user.id === data.debtorId);
            return (
               <ListGroup.Item key={data.eventId} className='d-flex justify-content-between align-items-center'>
                  <p style={{margin: 0, color: 'red'}}> You owe {data.value}€ to {debtor ? debtor.username : ''}</p>
                  <Button onClick={() => handleDeleteTransaction(data.eventId)} variant="outline-danger" size="sm">
                     <Trash size={15} />
                  </Button>
               </ListGroup.Item>
            )
         }
      });

   const listPositiveTransactions = () => 
      debtorTransactions?.map((data) => {
         console.log(data)
         if(!data.indebtedId.includes(data.debtorId)){
            const debtor = users?.find(user => user.id === data.indebtedId[0]);
         return (
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>
               <p style={{margin: 0, color: 'green'}}>{debtor ? debtor.username : ''} owes you {data.value}€</p>
               <Button onClick={() => handleDeleteTransaction(data.eventId)} variant="outline-danger" size="sm">
                  <Trash size={15} />
               </Button>
            </ListGroup.Item>
         )
      }
      });

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" >
               <h1>Your Balance</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container fluid className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px"}}>
                     <Container className="d-flex flex-column">
                        <p className="align-self-center">Debt</p>
                        <ListGroup>
                           {listPositiveTransactions()}
                        </ListGroup>
                     </Container>
                     
                     <Container className="d-flex flex-column">
                        <p className="align-self-center">Due</p>
                        <ListGroup>
                           {listNegativeTransactions()}
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