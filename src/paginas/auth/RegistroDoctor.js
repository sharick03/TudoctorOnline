import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const url = "http://localhost:5000/Doctor";

// Estados para almacenar los datos del formulario
const RegistroDoctor = () => {
    const [NombreDoctor, setNombreDoctor] = useState("");
    const [Especialidad, setEspecialidad] = useState("");
    const [Correo, setCorreo] = useState("");
    const redirect = useNavigate();

    // Función para manejar el envío del formulario
    const RegistroDoctor = async (e) => {
        e.preventDefault();
        // Realizar una solicitud POST a la URL con los datos del formulario
        await axios.post(url, {
            NombreDoctor: NombreDoctor,
            Especialidad: Especialidad,
            Correo: Correo,
        });
        redirect("/ListarDoctor");
    };

    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <b className="nav-link" data-widget="pushmenu" role="button">
                                <i className="fas fa-bars" />
                            </b>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <b className="nav-link"> Menú</b>
                        </li>
                    </ul>
                </nav>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <b className="brand-link">
                        <span className="brand-text font-weight-light">
                            Tu Doctor Online
                        </span>
                    </b>

                    <div className="sidebar">
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item">
                                    <Link to={"/dashboard"} className="nav-link">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/especialidades"} className="nav-link">
                                        Especialidades
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <div className="hold-transition register-page">
                    <div className="register-box">
                        <div className="card">
                            <div className="card-body register-card-body">
                                <p className="login-box-msg">Registro de Doctores</p>
                                <form onSubmit={RegistroDoctor}>
                                    <div className="input-group mb-3">
                                        <input
                                                type="text"
                                                className="form-control"
                                                id="NombreDoctor"
                                                placeholder="Nombre Doctor"
                                                value={NombreDoctor}
                                                onChange={(e) => setNombreDoctor(e.target.value)}
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fa-solid fa-user-doctor" />                                               </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type='text' id='Especialidad'
                                                className="form-control"
                                                placeholder="Especialidad"
                                                value={Especialidad}
                                                onChange={(e) => setEspecialidad(e.target.value)}
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fa-solid fa-user-tie" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type='email' id='Correo'
                                                className="form-control"
                                                placeholder="Correo"
                                                value={Correo}
                                                onChange={(e) => setCorreo(e.target.value)}
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fa-regular fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success mt-3">
                                            Guardar
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 1.0
                    </div>
                    <strong>Tu Doctor Online © 2014-2021.</strong> Derechos reservados.
                </footer>
            </div>
        </div>
    );
};

export default RegistroDoctor;
