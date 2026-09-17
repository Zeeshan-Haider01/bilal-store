let ProductCard = ({product}) => {
  return (
    <>
      <div className="product">
        <img src={product?.thumbnail} alt={product?.title} />
        <h2>{product?.title}</h2>
        <p>{product?.price}</p>
      </div>
    </>
  );
};

export default ProductCard;
