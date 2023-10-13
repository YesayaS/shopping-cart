const Home = ({ products, handleCart }) => {
  const { addCart, removeCart } = handleCart;
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <button onClick={() => addCart(product)}>Add Item</button>
            <button onClick={() => removeCart(product)}>remove Item</button>
          </div>
        );
      })}
    </>
  );
};

export { Home };
