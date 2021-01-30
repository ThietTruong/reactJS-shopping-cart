import React from "react";
import formatCurrency from "../utill";

function Products({ products, addToCart }) {
  return (
    <div>
      <ul className="products">
        {products.map((product) => {
          return (
            <>
              <li key={product._id}>
                <div className="product">
                  <a href={`#${product._id}`}>
                    <img src={product.image} alt={product.image}></img>
                    <p> {product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => addToCart(product)}
                    >
                      {" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
