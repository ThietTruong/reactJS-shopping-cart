import React from "react";
import formatCurrency from "../utill";
function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img alt={item.image} src={item.image}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      ${item.price} x {item.count}
                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length === 0 ? (
            ""
          ) : (
            <div className="cart">
              <div className="total">
                <div>
                  {"Total: "}
                  {formatCurrency(
                    cartItems.reduce(
                      (acc, cur) => acc + cur.price * cur.count,
                      0
                    )
                  )}
                </div>
                <button className="button primary">Proceed</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
