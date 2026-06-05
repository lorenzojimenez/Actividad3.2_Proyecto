const vacantes = [
  {
    id: 1,
    titulo: "Auxiliar Administrativo",
    empresa: "Comercial Carrillo",
    ubicacion: "Centro, Felipe Carrillo Puerto",
    descripcionCorta:
      "Apoyo en captura de datos, atención telefónica y organización de documentos.",
    fechaPublicacion: "2026-06-01"
  },
  {
    id: 2,
    titulo: "Vendedor de Mostrador",
    empresa: "Ferretería Maya",
    ubicacion: "Colonia Jesús Martínez Ross",
    descripcionCorta:
      "Atención al cliente y seguimiento de ventas en tienda.",
    fechaPublicacion: "2026-06-02"
  },
  {
    id: 3,
    titulo: "Técnico en Soporte",
    empresa: "Tecnologías del Sur",
    ubicacion: "Centro, Felipe Carrillo Puerto",
    descripcionCorta:
      "Mantenimiento preventivo y correctivo de equipos de cómputo.",
    fechaPublicacion: "2026-06-03"
  },
  {
    id: 4,
    titulo: "Recepcionista",
    empresa: "Hotel Ka'an",
    ubicacion: "Avenida Santiago Pacheco Cruz",
    descripcionCorta:
      "Atención a visitantes y gestión de reservaciones.",
    fechaPublicacion: "2026-06-04"
  }
];

export const obtenerVacantes = () => {
  return vacantes;
};

export default vacantes;