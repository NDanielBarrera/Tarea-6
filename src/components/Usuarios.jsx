import { useEffect, useState } from "react";
import UsuarioCard from "./UsuarioCard.jsx";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerUsuarios() {
      try {
        setLoading(true);
        setError("");

        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!respuesta.ok) {
          throw new Error(
            `Error HTTP: ${respuesta.status}`
          );
        }

        const datos = await respuesta.json();

        setUsuarios(datos);
      } catch (errorCapturado) {
        console.error(
          "Error al obtener los usuarios:",
          errorCapturado
        );

        setError(
          "No se pudieron cargar los usuarios. Intenta nuevamente."
        );
      } finally {
        setLoading(false);
      }
    }

    obtenerUsuarios();
  }, []);

  if (loading) {
    return (
      <section>
        <p>Cargando usuarios...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Usuarios</h2>
        <ul className="usuarios-lista">
          {usuarios.map((usuario) => (
            <UsuarioCard
              key={usuario.id}
              usuario={usuario}
            />
          ))}
        </ul>
    </section>
  );
}

export default Usuarios;