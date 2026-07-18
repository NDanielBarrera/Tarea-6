import "./UsuarioCard.css";

function UsuarioCard({ usuario }) {

    return (

        <li className="usuario-card">

            <h3>{usuario.name}</h3>

            <p>
                <span>Usuario:</span> @{usuario.username}
            </p>

            <p>
                <span>Correo:</span><br />
                <a href={`mailto:${usuario.email}`}>
                    {usuario.email}
                </a>
            </p>

            <p>
                <span>Teléfono:</span><br />
                {usuario.phone}
            </p>

            <p>
                <span>Ciudad:</span><br />
                {usuario.address.city}
            </p>

            <p>
                <span>Empresa:</span><br />
                {usuario.company.name}
            </p>

        </li>

    );

}

export default UsuarioCard;