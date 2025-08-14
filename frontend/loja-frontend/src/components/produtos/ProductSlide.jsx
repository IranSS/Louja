function ProductSlide() {
    const imagemSalva = localStorage.getItem("imagemProduto");
  return (
    <div className="produto">
      <img src={imagemSalva} alt="Preview"/>
      <br />
      <p>nome</p>
      <div>
        <button
        >
          {/* R$ {produto.preco.toFixed(2)} */}
        </button>
      </div>
    </div>
  );
}
export default ProductSlide;
