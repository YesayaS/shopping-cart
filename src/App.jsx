import { render, screen } from "@testing-library/react";
import { useState, useEffect } from "react";

import { useProducts } from "./hooks/useProducts";
import { Home } from "./pages/home";
import { NavigationBar } from "./components/navBar";
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
  const handle = {
    addCart: addCart,
    removeCart: removeCart,
  };

  if (error) return <div>Error</div>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <NavigationBar></NavigationBar>
      <p>checkout = {checkout}</p>
      <Home products={products} handleCart={handle}></Home>
    </>
  );
}

export default App;
