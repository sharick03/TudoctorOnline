import React, {Fragment} from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from "./paginas/auth/login";
import RegistroPaciente from './paginas/auth/RegistroPaciente';
import Dashboard from "./paginas/auth/dashboard";
import Especialidades from "./paginas/auth/especialidades";
import ListarDoctor from "./paginas/auth/ListarDoctor";
import Agenda from "./paginas/auth/agenda";
import RegistroDoctor from "./paginas/auth/RegistroDoctor";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/registroPaciente" exact element={<RegistroPaciente/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/especialidades" exact element={<Especialidades/>}/>
          <Route path="/agenda" exact element={<Agenda/>}/>
          <Route path='/' element={<ListarDoctor></ListarDoctor>}></Route>
          <Route path='/RegistroDoctor' element={<RegistroDoctor></RegistroDoctor>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
