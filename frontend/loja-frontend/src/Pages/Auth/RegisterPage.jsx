import RegisterComponent from "../../components/RegisterComponent";
import Home from "../Principal/Home";

import "../../Styles/RegisterStyle.css";

RegisterComponent;
function RegisterPage() {
  return (
    <div>
      <Home></Home>
      <RegisterComponent></RegisterComponent>
    </div>
  );
}
export default RegisterPage;
