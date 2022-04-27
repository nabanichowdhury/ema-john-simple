import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      console.log(addedProduct);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shopping-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/order">
            <button>Review order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
