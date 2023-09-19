import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import { show_alerta } from "../../functions";

const RegistroPaciente = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000/Pacientes";
  const [TipoDocumento, setTipoDocumento] = useState("");
  const [Identificacion, setIdentificacion] = useState("");
  const [Nombre_Apellido, setNombre_Apellido] = useState("");
  const [FechaNaciPaci, setFechaNaciPaci] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Clave, setClave] = useState("");
  const [operation ] = useState(1);

  const validar = () => {
    if (TipoDocumento.trim() === "") {
      show_alerta("Seleccione su tipo de documento");
    } else if (Identificacion.trim() === "") {
      show_alerta("Digite su numero de documento");
    } else if (Nombre_Apellido.trim() === "") {
      show_alerta("Digite su nombre");
    } else if (FechaNaciPaci.trim() === "") {
      show_alerta("Digite su fecha de nacimiento");
    } else if (Telefono.trim() === "") {
      show_alerta("Digite su telefono");
    } else if (Clave.trim() === "") {
      show_alerta("Digite su clave");
    } else {
      const pacienteData = {
        TipoDocumento,
        Identificacion,
        Nombre_Apellido,
        FechaNaciPaci,
        Telefono,
        Clave,
      };

      if (operation === 1) {
        // REGISTRO PACIENTES
        axios.post(url, pacienteData).then((response) => {
            Swal.fire("Éxito", "Paciente registrado correctamente");
            navigate("../dashboard");
          })
          .catch((error) => {
            //ERROR DE SOLICITUD
            console.error("Error al registrar paciente:", error);
            Swal.fire("Error", "Hubo un error al registrar el paciente");
          });
      } else if (operation === 2) {
        // Editar perfil de paciente
        const pacienteId = obtenerPacienteId();
        if (pacienteId) {
          axios.put(`${url}/${pacienteId}`, pacienteData).then((response) => {
              Swal.fire("Éxito", "Perfil de paciente actualizado", "success");
            })
            .catch((error) => {
              console.error("Error al editar perfil del paciente:", error);
              Swal.fire("Error", "Hubo un error al editar el perfil del paciente", "error");
            });
        } else {
          console.error("No se pudo obtener el ID del paciente para la edición.");
        }
      }
    }
  };

  const obtenerPacienteId = () => {
    //la URL contiene el ID del paciente
    const urlParams = new URLSearchParams(window.location.search);
    const pacienteId = urlParams.get("pacienteId");
  
    // Devuelve el ID del paciente o null si no se puede obtener.
    return pacienteId ? parseInt(pacienteId, 10) : null;
  };

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo"></div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registro de pacientes</p>
            <form onSubmit={validar}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="Nombre_Apellido"
                  name="Nombre_Apellido"
                  value={Nombre_Apellido}
                  onChange={(e)=> setNombre_Apellido(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                  <select
                    name="TipoDocumento"
                    value={TipoDocumento}
                    onChange={(e)=> setTipoDocumento(e.target.value)}
                  >
                    <option value="">Seleccione un tipo de documento</option>
                    <option value="CedulaCiudadania">Cédula de Ciudadania</option>
                    <option value="TarjetaIdentidad">Tarjeta de Identidad</option>
                    <option value="RegistroCivil">Registro Civil</option>
                  </select>
                  <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-thin fa-id-card" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="identificacion"
                  id="Identificacion"
                  name="Identificacion"
                  value={Identificacion}
                  onChange={(e)=> setIdentificacion(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-address-card" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Fecha Nacimiento"
                  id="FechaNaciPaci"
                  name="FechaNaciPaci"
                  value={FechaNaciPaci}
                  onChange={(e)=> setFechaNaciPaci(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telefono"
                  id="Telefono"
                  name="Telefono"
                  value={Telefono}
                  onChange={(e)=> setTelefono(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={Clave}
                  onChange={(e)=> setClave(e.target.value)}

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
                  </div>
                </div>
              </div>
              <div className="social-auth-links text-center">
              <button type="submit" className="btn btn-block btn-primary">
                {operation === 1 ? "Crear Cuenta" : "Guardar Cambios"}
              </button>
                <Link to={"/login"} className="text-center">
                  Ya tengo cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroPaciente;