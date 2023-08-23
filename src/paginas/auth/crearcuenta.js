import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () =>{
    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <Link to="../../index2.html">
              <b>Registrate</b>
            </Link>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Registrate con tus credenciales</p>
              <form action="../../index.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre completo "
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
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
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirme la contraseña"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        defaultValue="agree"
                      />
                      <label htmlFor="agreeTerms">
                      Acepto los terminos <Link to="#">terminos</Link>
                      </label>
                    </div>
                  </div>
                </div>
              <div className="social-auth-links text-center">
                <Link to="#" className="btn btn-block btn-primary">
                  Registrarme
                </Link>
              </div>
              <Link to="login.html" className="text-center">
                Ya tengo cuenta
              </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default CrearCuenta; //Exportar todo el objeto