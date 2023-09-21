import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const baseUrl = "http://localhost:5000/Pacientes";

const Login = () => {
    // Obtiene la función de navegación
    const navigate = useNavigate();
    // Estado para almacenar la identificación y la contraseña del paciente
    const [Paciente, setPaciente] = useState({
        Identificacion: "",
        Clave: "",
    });
    
    const { Identificacion, Clave } = Paciente;
    // Función que actualiza el estado cuando se
    //cambian los valores de los campos
    const onChange = (e) => {
        setPaciente({
        ...Paciente,
        [e.target.name]: e.target.value,
        });
    };
    
     // Función para iniciar sesión
    const iniciarSesion = async () => {
        if (Clave.length < 4) {
        const msg = "Las contraseñas deben tener minimo 4 caractéres.";
        swal({
            title: "Advertencia",
            text: msg,
            icon: "error",
            button: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
            },
        });
        } else {
        // Prepara los datos del paciente para enviar al servidor
        const data = {
            Identificacion: Paciente.Identificacion,
            Clave: Paciente.Clave,
        };
        // Realiza una llamada a la API para iniciar sesión
        const response = await APIInvoke.invokePOST(`/Pacientes`, data);
        console.log(response);

        // Almacena el token JWT en el almacenamiento local
        const jwt = response.token;
        localStorage.setItem("Item", jwt);
        navigate("/dashboard");
        }
    };

     // Maneja el envío del formulario
    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    };
    
    useEffect(() => {
        document.getElementById("Identificacion").focus();
    }, []);
    
    return (
        <div className="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
            <b>Inicio de sesion</b>
            </div>

            <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">
                Bienvenido, por favor ingrese su informacion
                </p>
                <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input
                    type="number"
                    className="form-control"
                    placeholder="Identificacion"
                    id="Identificacion"
                    name="Identificacion"
                    value={Identificacion}
                    onChange={onChange}
                    required
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
                    id="Clave"
                    name="Clave"
                    value={Clave}
                    onChange={onChange}
                    required
                    />
                    <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-lock" />
                    </div>
                    </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                    <button
                    to={"#"}
                    type="submit"
                    className="btn btn-block btn-primary"
                    >
                    Ingresar
                    </button>
                    <Link to={"/registroPaciente"} className="btn btn-block btn-danger">
                    Crear Cuenta
                    </Link>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
