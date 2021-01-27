import React from "react";
import formatCurrency from "../utill";

function Products({ products }) {
  const arr = [];
  return (
    <div>
      <ul className="products">
        {products.map(({ _id, title, image, price }) => {
          return (
            <>
              <li key={_id}>
                <div className="product">
                  <a href={`#${_id}`}>
                    <img src={image} alt={image}></img>
                    <p> {title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(price)}</div>
                    <button className="button primary"> Add to Cart</button>
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
