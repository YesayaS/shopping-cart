import { useState, useEffect } from "react";

import { useProducts } from "./hooks/useProducts";
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import "./App.css";

function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(0);

  useEffect(() => {
    const sum = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.count,
      0,
    );
    setCheckout(sum.toFixed(2));
  }, [cart]);

  const addCart = (product) => {
    const i = cart.findIndex((item) => item.id === product.id);
    const updateCart = [...cart];
    if (i >= 0) {
      updateCart[i].count += 1;
    } else {
      updateCart.push({ id: product.id, price: product.price, count: 1 });
    }
    setCart(updateCart);
  };
  const removeCart = (product) => {
    const i = cart.findIndex((item) => item.id === product.id);
    const updateCart = [...cart];
    if (i >= 0) {
      if (updateCart[i].count > 1) updateCart[i].count -= 1;
      else updateCart.splice(i, 1);
      setCart(updateCart);
    } else return;
  };
  const handleCart = {
    addCart: addCart,
    removeCart: removeCart,
  };

  if (error) return <div>Error</div>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Home />
      {/* <Shop
        checkout={checkout}
        products={products}
        handleCart={handleCart}
      ></Shop> */}
    </>
  );
}

export default App;
