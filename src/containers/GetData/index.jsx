import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function GetData() {
  const cartQueryKey = "cart";

  const fetchCart = async () => {
    const response = await axios.get("https://fakestoreapi.com/carts");
    return response.data;
  };

  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError,
    error: cartError,
  } = useQuery(cartQueryKey, fetchCart);
  console.log("Cart data", cartData);

  if (isCartLoading) return <div>Loading cart data...</div>;
  if (isCartError)
    return <div>Error fetching cart data: {cartError.message}</div>;

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {cartData.map((item, index) => (
          <li key={index}>{item[index]}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetData;
