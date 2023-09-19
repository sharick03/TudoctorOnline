import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/Doctor";

const CreateDoctor = () => {
    const[NombreDoctor, setNombreDoctor]= useState('');
    const[Especialidad, setDescription]= useState('');
    const[Correo, setCorreo]= useState('');
    const redirect = useNavigate();

    const store = async(e) =>{
        e.preventDefault();
        await axios.post(url, {NombreDoctor:NombreDoctor,Especialidad:Especialidad,Correo:Correo});
        redirect('/');
    }

    return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Añadir Doctor</div>
                    <div className="card-body">
                        <form onSubmit={store}>
                            <label>Nombre: </label>
                            <input type='text' id='NombreDoctor' maxLength='80'
                            className="form-control"
                            required={true}
                            value={NombreDoctor}
                            onChange={ (e) => setNombreDoctor(e.target.value)}>
                            </input>
                            <label>Especialidad: </label>
                            <input type='text' id='Especialidad' maxLength='150'
                            className="form-control"
                            required={true} value={Especialidad} onChange={ (e) => setDescription(e.target.value)}>
                            </input>
                            <label>Correo: </label>
                            <input type='email' id='Correo'
                            className="form-control" step='0.1'
                            required={true} value={Correo} onChange={ (e) => setCorreo(e.target.value)}>
                            </input>
                            <button className="btn btn-success mt-3">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default  CreateDoctor;