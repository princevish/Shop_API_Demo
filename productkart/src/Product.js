import React, { useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import loading from "./loading.svg";
import ProductItem from "./ProductItem";

const Product = ({ data, setCart, fetchMoreData, totalength }) => {

  const addToCartHandler = useCallback((item) => {
    setCart((prev) => [...prev, item]);
  }, [setCart]);
 
  return (
    <div className="mt-5 mb-5">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length !== totalength}
        loader={<h4 className="text-center mt-5">Loading...</h4>}
      >
        <div className="container">
          <div className="row justify-content-center">
            {data.length === 0 && (
              <div style={{ height: "80vh", width: "auto" }}>
                <img src={loading} className="mt-5" alt="loader" />
              </div>
            )}
            {data.length > 0 &&
              data.map((item, index) => (
                <div key={index} className="col-md-4 mt-4">
                  <ProductItem
                    item={item}
                    Handler={addToCartHandler}
                    HandlerTitle={"Add Cart"}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
