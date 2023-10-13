const Shop = ({ checkout, products, handleCart }) => {
  const { addCart, removeCart } = handleCart;
  return (
    <>
      <p>checkout : {checkout}</p>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <button onClick={() => addCart(product)}>Add Item</button>
            <button onClick={() => removeCart(product)}>remove Item</button>
          </div>
        );
      })}
    </>
  );
};

export { Shop };
