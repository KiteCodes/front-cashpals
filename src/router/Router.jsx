import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

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
      <Route index element={<Arrival/>} />
      
      <Route exact path="/login"     element={<LogIn/>}/>
      <Route exact path="/register"  element={<Register/>}/>

      <Route exact path="/home"      element={<PrivateRoute component={Home}/>}/>
      <Route exact path="/contacts"  element={<PrivateRoute component={Contacts}/>}/>
      <Route exact path="/group/:id" element={<PrivateRoute component={Group}/>}/>
      <Route exact path="/groups"    element={<PrivateRoute component={Groups}/>}/>
      <Route exact path="/profile"   element={<PrivateRoute component={Profile}/>}/>
    </Routes>
   </BrowserRouter>
)

export default Router