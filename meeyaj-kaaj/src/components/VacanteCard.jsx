function VacanteCard({
  titulo,
  empresa,
  ubicacion,
  descripcionCorta
}) {
  const mostrarDetalleVacante = () => {
    alert(
      `${titulo}

Empresa: ${empresa}

Ubicación: ${ubicacion}

Descripción:
${descripcionCorta}`
    );
  };

  return (
    <article className="vacante-card">
      <h3>{titulo}</h3>

      <p>
        <strong>Empresa:</strong> {empresa}
      </p>

      <p>
        <strong>Ubicación:</strong> {ubicacion}
      </p>

      <p>{descripcionCorta}</p>

      <button onClick={mostrarDetalleVacante}>
        Ver más
      </button>
    </article>
  );
}

export default VacanteCard;