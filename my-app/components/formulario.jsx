import React, { useState } from "react";
import { Row, Col, Button } from 'react-bootstrap/';

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Formulario enviado");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div style={{ marginBottom: '2rem' }} className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="  Nombre*"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="  Apellido*"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                    </div>
                </Col>

                <Col className="d-flex justify-content-center">
                    <div style={{ marginBottom: '2rem' }} className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="email"
                            id="correo"
                            name="correo"
                            placeholder="  Correo*"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="  Teléfono*"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />
                    </div>
                </Col>

                <Col className="d-flex justify-content-center">
                    <div style={{ marginBottom: '2rem' }} className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            placeholder="  Ciudad*"
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mx-1">
                        <input
                            style={{ height: '40px', fontWeight: '100', border: '1px solid' }}
                            type="text"
                            id="pais"
                            name="pais"
                            placeholder="  País*"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            required
                        />
                    </div>
                </Col>

                <Col className="mx-5">
                    <div>
                        <textarea
                            style={{ height: '13rem',width:'80%' ,fontWeight: '100', border: '1px solid',borderRadius:'5px' }}
                            id="mensaje"
                            name="mensaje"
                            placeholder="  Mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <div style={{ marginTop:'1rem' }} className='d-flex justify-content-center alig-items-center'>
                        <Button type="submit" size='lg' style={{ background: '#a80552', border: 'none', borderRadius: '8px', width: '100%',fontWeight:'100' }}>Solicitar Asesoria</Button>{' '}
                    </div>
                </Col>
            </Row>
        </form>
    );
}

export default Formulario;

