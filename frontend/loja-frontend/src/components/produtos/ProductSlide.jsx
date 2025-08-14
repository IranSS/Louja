function ProductSlide({imagemPreview}) {
  return (
    <div className="produto">
      <img src={imagemPreview} alt="Preview"/>
      <br />
      <p>nome</p>
      <div>
        <button className="buttonComprar"
        >
          botas
          {/* R$ {produto.preco.toFixed(2)} */}
        </button>
      </div>
    </div>
  );
}
export default ProductSlide;
