import { useState, useEffect } from "react";

import { useProducts } from "../../hooks/useProducts";
import { Headers } from "../../components/header/header";

import "./shop.css";
import "material-symbols/sharp.css";

const Shop = () => {
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

  return (
    <div className="content">
      <Headers />
      <p style={{ textAlign: "center" }}>checkout : ${checkout}</p>
      <ul className="items">
        {products.map((product) => {
          return (
            <li className="item" key={product.id}>
              <img src={product.image} alt="" />
              <div className="detail">
                <p className="category">{product.category}</p>
                <p className="title">{product.title}</p>
                <p className="price">${product.price}</p>
                <p className="rating">
                  <i className="material-symbols-sharp">Star</i>
                  {product.rating.rate}
                </p>
              </div>
              <button onClick={() => addCart(product)}>
                <i className="material-symbols-sharp">Add</i>
              </button>
              {/* <button onClick={() => removeCart(product)}>remove Item</button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Shop };
