import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/crearcuenta";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crearcuenta" exact element={<CrearCuenta/>}/>

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
