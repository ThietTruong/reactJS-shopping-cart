import React, { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import data from "./data.json";

function App() {
  const [productList, setProductList] = useState(data.products);
  const [size, setSize] = useState();
  const [sort, setSort] = useState();
  const [cart, setCart] = useState([]);
  const filterProduct = (event) => {
    if (event.target.value === "") {
      setProductList(data.products);
    } else {
      console.log("hihi", event.target.value);
      setSize(event.target.value);
      setProductList(
        data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        )
      );
    }
  };
  const sortProduct = (event) => {
    const valueSort = event.target.value;
    setSort(valueSort);
    setProductList(
      productList
        .slice()
        .sort((a, b) =>
          valueSort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : valueSort === "highest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        )
    );
  };
  const addToCart = (product) => {
    let alreadyInCart = false;
    const cartItems = cart.slice();
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCart(cartItems);
  };
  const removeFromCart = (product) => {
    let newCart = cart.slice();
    newCart = cart.filter((itemCart) => product._id !== itemCart._id);
    setCart(newCart);
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              products={productList}
              size={size}
              sort={sort}
              filterProduct={filterProduct}
              sortProduct={sortProduct}
            />
            <Products products={productList} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
