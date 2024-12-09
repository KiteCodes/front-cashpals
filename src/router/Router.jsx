import { BrowserRouter, Route, Routes } from "react-router-dom";

import Arrival from '../pages/Arrival'
import Contacts from '../pages/Contacts'
import Group from '../pages/Group'
import Groups from '../pages/Groups'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import LogIn from '../pages/LogIn'
import Register from '../pages/Register'

import PrivateRoute from "./PrivateRouter";

const Router = () => (
   <BrowserRouter>
    <Routes>
      <Route index element={<PrivateRoute component={Home}/>} />
      
      <Route path="/arrival"   element={<Arrival/>}/>
      <Route path="/login"     element={<LogIn/>}/>
      <Route path="/register"  element={<Register/>}/>

      <Route path="/contacts"  element={<PrivateRoute component={Contacts}/>}/>
      <Route path="/group/:id" element={<PrivateRoute component={Group}/>   }/>
      <Route path="/groups"    element={<PrivateRoute component={Groups}/>  }/>
      <Route path="/profile"   element={<PrivateRoute component={Profile} />}/>
    </Routes>
   </BrowserRouter>
)

export default Router