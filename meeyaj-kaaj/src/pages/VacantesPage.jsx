import VacanteCard from "../components/VacanteCard";
import { obtenerVacantes } from "../data/vacantesMock";

function VacantesPage() {
  const vacantes = obtenerVacantes();

  return (
    <section>
      <h2 className="titulo-seccion">Vacantes Disponibles</h2>

      <div className="grid-vacantes">
        {vacantes.map((vacante) => (
          <VacanteCard
            key={vacante.id}
            titulo={vacante.titulo}
            empresa={vacante.empresa}
            ubicacion={vacante.ubicacion}
            descripcionCorta={vacante.descripcionCorta}
          />
        ))}
      </div>
    </section>
  );
}

export default VacantesPage;