import { Route, Routes, BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { AdminUsers } from './Components/AdminUsers';
import { Login } from './Components/Login';
import { AdminPanel } from "./Components/AdminPanel";
import { Solicitud } from "./Components/Solicitud";
import { SolicitudCrear } from "./Components/SolicitudCrear";
import { SolicitudCon } from "./Components/SolicitudCon";
import { Devoluciones } from "./Components/Devoluciones";
import { Inventory } from "./Components/Inventory";
import { AddAdmin } from "./Components/AddAdmin";
import { AddUser } from "./Components/AddUser";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>

          <Route path='/AdminUser' element={<AdminUsers />}></Route>
          <Route path='/AdminPanel' element={<AdminPanel />}></Route>

          <Route path="/Devoluciones" element={<Devoluciones />}></Route>

          <Route path='/Solicitud' element={<Solicitud />}></Route>
          <Route path='/SolicitudCrear' element={<SolicitudCrear/>}></Route>
          <Route path='/SolicitudCon' element={<SolicitudCon/>}></Route>
          <Route path="AddAdmin" element = {<AddAdmin/>}></Route>
          <Route path="AddUser" element = {<AddUser/>}></Route>

          <Route path='/Inventory' element={<Inventory />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
