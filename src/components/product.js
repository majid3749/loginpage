import React from "react";
import { useState } from "react";

const Product = ({ productName }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 bage bg-primary">{count == 0 ? "zero" : count}</span>
      <button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">
        delete
      </button>
    </div>
  );

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  function handleDelete() {
    console.log("delete");
  }
};

export default Product;
