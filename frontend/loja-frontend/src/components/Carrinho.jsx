function Carrinho() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "relative",
          left: "1.58rem",
        }}
      >
        0
      </p>
      <img
        src=".\src\assets\icons\carrinho.png"
        style={{ width: "35px", height: "30px" }}
      ></img>
      <p
        style={{
          padding: "0.2rem",
          marginRight: "0.8rem",
          marginLeft: "0.1rem",
          position: "relative",
          top: "0.18rem",
        }}
      >
        carrinho
      </p>
    </div>
  );
}
export default Carrinho;
