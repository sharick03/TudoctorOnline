import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/Doctor";

const ListarDoctor = () => {
    const [Doctor, setDoctor] = useState([]);
    useEffect(() => {
        getDoctor();
    },[]);

    const getDoctor = async() =>{
        const respuesta = await axios.get(url);
        setDoctor(respuesta.data);
    }
    const deleteDoctor = async(id) =>{
        const params  = {headers: {'Content-Type':'application/json'},data:{'id':id}};
        await axios.delete(url,params);
        getDoctor();
    }
  return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
                <div className="d-grid mx-auto">
                    <Link to='/create' className="btn btn-dark">Añadir</Link>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>#</th><th>Producto</th><th>Descripción</th><th>Precio</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            { Doctor.map( (Doctor, i)=>(
                                <tr key={Doctor.id}>
                                    <td>{(i+1)}</td>
                                    <td>{Doctor.NombreDoctor}</td>
                                    <td>{Doctor.Especialidad}</td>
                                    <td>{Doctor.Correo}</td>
                                    <td>
                                        <Link to={`/edit/${Doctor.id}`} className='btn btn-warning'>Editar</Link>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=>deleteDoctor(Doctor.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListarDoctor