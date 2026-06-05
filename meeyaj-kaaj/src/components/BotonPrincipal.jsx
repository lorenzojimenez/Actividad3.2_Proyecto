import { useNavigate } from "react-router-dom";

function BotonPrincipal() {
  const navigate = useNavigate();

  const irAVacantes = () => {
    navigate("/vacantes");
  };

  return (
    <button
      className="boton-principal"
      onClick={irAVacantes}
    >
      Ver Vacantes
    </button>
  );
}

export default BotonPrincipal;