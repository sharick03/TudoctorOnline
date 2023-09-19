import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Inicio de sesion</b>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Plataforma para Usuarios de Servicios Medicos
              </p>
              <form method="post">
                <div className="input-group mb-3">
                  <input
                    type="int"
                    className="form-control"
                    placeholder="Identificacion"
                    id="Identificacion"
                    name="Identificacion"
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fa-regular fa-id-badge" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="Clave"
                    name="Clave"
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fa-solid fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="social-auth-links text-center mb-3">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => this.iniciarSesion()}
                  >
                    Iniciar Sesion
                  </button>
                  <Link to={"/registroPaciente"} className="btn btn-block btn-danger">
                    <i /> Crear Cuenta
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
  }

export default Login;
