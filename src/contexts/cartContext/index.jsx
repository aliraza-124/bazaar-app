import React, { createContext, useState } from "react";

export const CartContext = createContext();

const user = {
  name: "Ali",
  age: 25,
  gender: "Male",
};

function CartProvider({ children }) {
  const [cart, setCart] = useState(user);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
