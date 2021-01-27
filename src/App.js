import React, { useEffect, useState } from "react";
import Products from "./Components/Products";
import data from "./data.json";

function App() {
  const [productList, setProductList] = useState();
  const [size, setSize] = useState();
  const [sort, setSort] = useState();
  useEffect(() => {
    setProductList(data.products);
  }, []);
  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={data.products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
