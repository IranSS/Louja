function ProductSlide({nomePreview, precoPreview, imagemPreview}) {
  return (
    <div className="produto">
      <img src={imagemPreview} alt="Preview"/>
      <br />
      <p>{nomePreview}</p>
      <div>
        <button className="buttonComprar"
        >
          R$ {precoPreview.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
export default ProductSlide;
