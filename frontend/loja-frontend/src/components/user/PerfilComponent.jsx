import { useAuth } from "../../Configs/Auth/AuthProvider";

import "./../../Styles/PerfilStyle.css";

function PerfilComponent() {
  const { user, email, role } = useAuth();

  return (
    <div className="container-tudo-de-infos">
      <div className="container-infos">
        <h2>Informações do usuário</h2>
        <div className="elemento-infos">
          <p className="title">Endereço de email:</p>
          <p className="item">{email?.email}</p>
        </div>
        <div className="elemento-infos">
          <p className="title">Nome:</p>
          <p className="item">{user?.name}</p>
        </div>
        <div className="elemento-infos">
          <p className="title">Cargo:</p>
          <p className="item">{role?.role}</p>
        </div>
      </div>
    </div>
  );
}
export default PerfilComponent;
