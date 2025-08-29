import Home from "../Principal/Home";
import GerenciarPrateleira from "../../components/produtos/GerenciarPrateleira";

function GerenciarLayout() {
  return (
    <>
      <Home />
      <main className="principal-gerenciar-layout" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <GerenciarPrateleira className="gerenciar-prateleira-principal" />
      </main>
    </>
  );
}

export default GerenciarLayout;