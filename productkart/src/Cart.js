import React, { useState, useEffect, useCallback } from "react";
import loading from "./loading.svg";
import ProductItem from "./ProductItem";

const Cart = ({ cart, setCart }) => {
  const [cartItem, setCartItem] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const Fetch = useCallback(
    async (item) => {
      try {
        setLoadingData(true);
        const res = await fetch(`http://localhost:5000/product/${item}`);
        const data = await res.json();
        if (data.data) {
          setCartItem((prev) => [...prev, data.data]);
        }
        setLoadingData(false);
      } catch (e) {
        console.error(e);
        setLoadingData(false);
      }
    },
    []
  );

  useEffect(() => {
    cart &&
      cart.forEach((item) => {
        Fetch(item);
      });
    return () => {};
  }, []);

  const RemoveCartHandler = useCallback(
    (id) => {
      setCartItem(cartItem.filter((item) => item.id !== id));
      setCart(cart.filter((item) => item !== id));
    },
    [cart, cartItem, setCart]
  );

  return (
    <>
      <h1>Cart</h1>

      {loadingData && (
        <div style={{ height: "80vh", width: "auto" }}>
          <img src={loading} className="mt-5 text-center" alt="loader" />
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center">
          {cartItem.length > 0 ? (
            cartItem.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mt-4">
                  <ProductItem
                    item={item}
                    Handler={RemoveCartHandler}
                    HandlerTitle={"Remove"}
                  />
                </div>
              );
            })
          ) : (
            <h1 className="text-center mt-5">No Item in cart</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;