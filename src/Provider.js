import React, { useState } from "react";
import { CartContext } from "./Context";

const Provider = (props) => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart: (product) => {
          console.log(product);
          setCartList([...cartList, product]);
        }
      }}
    >
      {props.children}
      {/* TODO */}
    </CartContext.Provider>
  );
};

export default Provider;
