import { useState } from "react";

function EmpresaPage() {
  const [formulario, setFormulario] = useState({
    nombreEmpresa: "",
    correo: "",
    descripcionVacante: ""
  });

  const [errores, setErrores] = useState({});

  const actualizarCampo = ({ target }) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formulario.nombreEmpresa.trim()) {
      nuevosErrores.nombreEmpresa = "Ingrese el nombre de la empresa";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "Ingrese un correo";
    } else if (!correoValido.test(formulario.correo)) {
      nuevosErrores.correo = "Correo inválido";
    }

    if (!formulario.descripcionVacante.trim()) {
      nuevosErrores.descripcionVacante =
        "Ingrese una descripción de la vacante";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      alert("Vacante enviada correctamente");

      setFormulario({
        nombreEmpresa: "",
        correo: "",
        descripcionVacante: ""
      });
    }
  };

  return (
    <section className="formulario-empresa">
      <h2>Publicar Vacante</h2>

      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombreEmpresa"
          placeholder="Nombre de la empresa"
          value={formulario.nombreEmpresa}
          onChange={actualizarCampo}
        />

        {errores.nombreEmpresa && (
          <p className="error">{errores.nombreEmpresa}</p>
        )}

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulario.correo}
          onChange={actualizarCampo}
        />

        {errores.correo && (
          <p className="error">{errores.correo}</p>
        )}

        <textarea
          name="descripcionVacante"
          placeholder="Descripción de la vacante"
          rows="5"
          value={formulario.descripcionVacante}
          onChange={actualizarCampo}
        />

        {errores.descripcionVacante && (
          <p className="error">{errores.descripcionVacante}</p>
        )}

        <button type="submit">
          Publicar Vacante
        </button>
      </form>
    </section>
  );
}

export default EmpresaPage;