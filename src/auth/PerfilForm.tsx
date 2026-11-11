import React, { useEffect, useState } from 'react';
import { getJSON, postJson } from "../../lib/fetch.ts";
import { formToObject } from "../utils/form.ts";


const PerfilForm = ({setRoute, setUser, user}:any) => {
  
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    cfdi: '',
    cedulaProfesional: '',
    calle: '',
    numeroExterior: '',
    colonia: '',
    municipio: '',
    estado: '',
    codigoPostal: '',
    telefono: '',
    correo: '',
    logo: null,
  });


  // Manejador para campos de texto y selección
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envío del formulario
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const submitValue= formToObject(e.target )
    const response = await postJson(e.target.action, submitValue)
  };
  useEffect(()=>{
    const getPerfil = async function () {
      console.log("usuario", user)
        const info = await getJSON("/api/getProfile?id_user=" + user.id)
        
        if (info) {
          setFormData(info)
        }
    }

    getPerfil()
  }, [])
  return (
    <div className="perfil-container">
      <h2>Registrar Datos de Perfil</h2>
      <form action="/api/saveProfile" method="POST" onSubmit={handleSubmit} className="perfil-form">
        <input type="hidden" name="id_user" value={user.id} />
        {/* Información Personal y Profesional */}
        <fieldset>
          <legend>Información General y Profesional</legend>
          
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input
              type="text"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Cédula Profesional:</label>
            <input
              type="text"
              name="cedulaProfesional"
              value={formData.cedulaProfesional}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Uso de CFDI / Régimen Fiscal:</label>
            <select name="cfdi" value={formData.cfdi} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              <option value="G03">G03 - Gastos en general</option>
              <option value="P01">P01 - Por definir</option>
              <option value="612">612 - Personas Físicas con Actividades Empresariales y Profesionales</option>
            </select>
          </div>

          <div className="form-group">
            <label>Logotipo:</label>
            <input
              type="text"
              name="url"
              
            />

          </div>
        </fieldset>

        {/* Domicilio */}
        <fieldset>
          <legend>Domicilio</legend>
          
          <div className="form-row">
            <div className="form-group col">
              <label>Calle:</label>
              <input type="text" name="calle" value={formData.calle} onChange={handleChange} required />
            </div>
            <div className="form-group col-small">
              <label>Núm. Exterior:</label>
              <input type="text" name="numeroExterior" value={formData.numeroExterior} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Colonia:</label>
              <input type="text" name="colonia" value={formData.colonia} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Municipio / Alcaldía:</label>
              <input type="text" name="municipio" value={formData.municipio} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Estado:</label>
              <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />
            </div>
            <div className="Item form-group col-small">
              <label>Código Postal:</label>
              <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required maxLength={5} />
            </div>
          </div>
        </fieldset>

        {/* Datos de Contacto */}
        <fieldset>
          <legend>Datos de Contacto</legend>
          
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
          </div>
        </fieldset>

        <button type="submit" className="btn-submit">Guardar Perfil</button>
      </form>
    </div>
  );
};

export default PerfilForm;