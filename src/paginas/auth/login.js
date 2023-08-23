import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Inicio de sesion</b>
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Bienvenido ingrese sus credenciales</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                />
              </div>
            <div className="social-auth-links text-center mb-3">
              <Link to={"#"} className="btn btn-block btn-primary">
                <i/> Ingresar
              </Link>
              <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
                <i/> Crear Cuenta
              </Link>
            </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">¿Olvidaste la Contraseña?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; //Exportar todo el objeto
