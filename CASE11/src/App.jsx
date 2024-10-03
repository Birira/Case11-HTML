import { Route, Routes, BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { AdminUsers } from './Components/AdminUsers';
import { Login } from './Components/Login';
import { AdminPanel } from "./Components/AdminPanel";
import { Solicitud } from "./Components/Solicitud";
import { SolicitudCrear } from "./Components/SolicitudCrear";
import { SolicitudCon } from "./Components/SolicitudCon";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          
          <Route path='/AdminUser' element={<AdminUsers />}></Route>
          <Route path='/AdminPanel' element={<AdminPanel />}></Route>

          <Route path='/Solicitud' element={<Solicitud />}></Route>
          <Route path='/SolicitudCrear' element={<SolicitudCrear/>}></Route>
          <Route path='/SolicitudCon' element={<SolicitudCon/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
