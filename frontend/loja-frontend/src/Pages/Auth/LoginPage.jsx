import LoginComponent from "../../components/LoginComponent";
import Home from "../Principal/Home";

import "../../Styles/LoginStyle.css";

function LoginPage() {
  return (
    <div className="container">
      <Home textLoginOrUser={false}></Home>
      <div className="containerCampoLogin">
        <LoginComponent />
      </div>
    </div>
  );
}
export default LoginPage;
