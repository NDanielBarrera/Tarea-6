function UsuarioCard({ usuario }) {
  return (
    <li className="usuario-card">
      <h3 className="usuario-nombre">
        {usuario.name}
      </h3>

      <p className="usuario-alias">
        @{usuario.username}
      </p>

      <dl className="usuario-datos">
        <div>
          <dt>Correo</dt>
          <dd>
            <a href={`mailto:${usuario.email}`}>
              {usuario.email}
            </a>
          </dd>
        </div>

        <div>
          <dt>Teléfono</dt>
          <dd>{usuario.phone}</dd>
        </div>

        <div>
          <dt>Ciudad</dt>
          <dd>{usuario.address.city}</dd>
        </div>

        <div>
          <dt>Empresa</dt>
          <dd>{usuario.company.name}</dd>
        </div>
      </dl>
    </li>
  );
}

export default UsuarioCard;